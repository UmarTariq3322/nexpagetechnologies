import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { 
  rateLimit, 
  securityHeaders, 
  sanitizeInput, 
  isValidEmail, 
  isValidPhone, 
  isSpam,
  preventSQLInjection,
  preventXSS,
  logSecurityEvent
} from '@/lib/security'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').max(254),
  company: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  service: z.string().max(50).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  honeypot: z.string().max(0).optional(), // Should be empty for humans
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!rateLimit(ip)) {
      logSecurityEvent('rate_limit', { ip, userAgent: request.headers.get('user-agent') }, ip)
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: securityHeaders() }
      )
    }

    const body = await request.json()
    
    // Sanitize inputs
    const sanitizedBody = {
      name: sanitizeInput(body.name || ''),
      email: sanitizeInput(body.email || ''),
      company: body.company ? sanitizeInput(body.company) : undefined,
      phone: body.phone ? sanitizeInput(body.phone) : undefined,
      service: body.service ? sanitizeInput(body.service) : undefined,
      message: sanitizeInput(body.message || ''),
      honeypot: body.honeypot || '',
    }
    
    // Validate input
    const validatedData = contactSchema.parse(sanitizedBody)
    
    // Security checks
    const fullText = `${validatedData.name} ${validatedData.email} ${validatedData.message}`
    
    if (isSpam(fullText)) {
      logSecurityEvent('spam_detected', { ip, content: fullText.substring(0, 100) }, ip)
      return NextResponse.json(
        { error: 'Message appears to be spam.' },
        { status: 400, headers: securityHeaders() }
      )
    }
    
    if (preventSQLInjection(fullText)) {
      logSecurityEvent('suspicious_activity', { ip, type: 'sql_injection_attempt' }, ip)
      return NextResponse.json(
        { error: 'Invalid input detected.' },
        { status: 400, headers: securityHeaders() }
      )
    }
    
    if (preventXSS(fullText)) {
      logSecurityEvent('suspicious_activity', { ip, type: 'xss_attempt' }, ip)
      return NextResponse.json(
        { error: 'Invalid input detected.' },
        { status: 400, headers: securityHeaders() }
      )
    }
    
    // Additional validation
    if (!isValidEmail(validatedData.email)) {
      logSecurityEvent('invalid_input', { ip, type: 'invalid_email' }, ip)
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400, headers: securityHeaders() }
      )
    }
    
    if (validatedData.phone && !isValidPhone(validatedData.phone)) {
      logSecurityEvent('invalid_input', { ip, type: 'invalid_phone' }, ip)
      return NextResponse.json(
        { error: 'Invalid phone number.' },
        { status: 400, headers: securityHeaders() }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    
    // For now, just log the data
    console.log('Contact form submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip,
    })

    // Simulate email sending (replace with actual email service)
    // await sendEmail({
    //   to: 'contact@digitalacubens.com',
    //   subject: `New contact form submission from ${validatedData.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
    //     <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
    //     <p><strong>Service:</strong> ${validatedData.service || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `
    // })

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200, headers: securityHeaders() }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400, headers: securityHeaders() }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: securityHeaders() }
    )
  }
}
