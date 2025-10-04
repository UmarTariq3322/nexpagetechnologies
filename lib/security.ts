// Security utilities and middleware

import { NextRequest, NextResponse } from 'next/server'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100 // requests per window

// In-memory store for rate limiting (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitStore.get(ip)
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }
  
  userLimit.count++
  return true
}

// Security headers middleware
export function securityHeaders() {
  return {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://api.openai.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  }
}

// Input sanitization
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 1000) // Limit length
}

// Email validation with additional security checks
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailRegex.test(email)) {
    return false
  }
  
  // Additional security checks
  if (email.length > 254) {
    return false
  }
  
  if (email.includes('..') || email.startsWith('.') || email.endsWith('.')) {
    return false
  }
  
  return true
}

// Phone number validation
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '')
  return phoneRegex.test(cleanPhone)
}

// Spam detection
export function isSpam(content: string): boolean {
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'winner', 'congratulations',
    'click here', 'free money', 'make money', 'work from home',
    'weight loss', 'diet pills', 'credit repair', 'debt consolidation'
  ]
  
  const lowerContent = content.toLowerCase()
  return spamKeywords.some(keyword => lowerContent.includes(keyword))
}

// SQL injection prevention (basic)
export function preventSQLInjection(input: string): boolean {
  const sqlKeywords = [
    'select', 'insert', 'update', 'delete', 'drop', 'create',
    'alter', 'exec', 'execute', 'union', 'script', 'javascript'
  ]
  
  const lowerInput = input.toLowerCase()
  return sqlKeywords.some(keyword => lowerInput.includes(keyword))
}

// XSS prevention
export function preventXSS(input: string): boolean {
  const xssPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<link/i,
    /<meta/i,
    /<style/i
  ]
  
  return xssPatterns.some(pattern => pattern.test(input))
}

// CSRF token generation (simplified)
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}

// Validate CSRF token
export function validateCSRFToken(token: string, sessionToken: string): boolean {
  return token === sessionToken
}

// IP address validation
export function isValidIP(ip: string): boolean {
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip)
}

// Request logging for security monitoring
export function logSecurityEvent(
  type: 'rate_limit' | 'spam_detected' | 'invalid_input' | 'suspicious_activity',
  details: Record<string, any>,
  ip: string
) {
  console.log(`[SECURITY] ${type.toUpperCase()}:`, {
    timestamp: new Date().toISOString(),
    ip,
    userAgent: details.userAgent,
    ...details
  })
}

// Security middleware for API routes
export function withSecurity(handler: Function) {
  return async (req: NextRequest, ...args: any[]) => {
    const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'
    
    // Rate limiting
    if (!rateLimit(ip)) {
      logSecurityEvent('rate_limit', { ip }, ip)
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: securityHeaders() }
      )
    }
    
    // Add security headers
    const response = await handler(req, ...args)
    
    if (response instanceof NextResponse) {
      Object.entries(securityHeaders()).forEach(([key, value]) => {
        response.headers.set(key, value)
      })
    }
    
    return response
  }
}
