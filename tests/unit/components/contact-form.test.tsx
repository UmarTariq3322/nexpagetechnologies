import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from '@/components/sections/contact-form'

// Mock fetch
global.fetch = jest.fn()

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: 'Success' }),
    })
  })

  test('renders form fields correctly', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Company/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Service Interest/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  test('validates required fields', async () => {
    render(<ContactForm />)
    
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Message is required/i)).toBeInTheDocument()
    })
  })

  test('validates email format', async () => {
    render(<ContactForm />)
    
    const emailInput = screen.getByLabelText(/Email Address/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument()
    })
  })

  test('validates message length', async () => {
    render(<ContactForm />)
    
    const messageInput = screen.getByLabelText(/Message/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    
    fireEvent.change(messageInput, { target: { value: 'short' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Message must be at least 10 characters/i)).toBeInTheDocument()
    })
  })

  test('submits form with valid data', async () => {
    render(<ContactForm />)
    
    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email Address/i)
    const messageInput = screen.getByLabelText(/Message/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'This is a test message with enough characters' } })
    
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: expect.stringContaining('John Doe'),
      })
    })
  })

  test('shows success message after successful submission', async () => {
    render(<ContactForm />)
    
    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email Address/i)
    const messageInput = screen.getByLabelText(/Message/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'This is a test message with enough characters' } })
    
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Message Sent Successfully!/i)).toBeInTheDocument()
    })
  })

  test('shows error message on submission failure', async () => {
    ;(fetch as jest.Mock).mockRejectedValue(new Error('Network error'))
    
    render(<ContactForm />)
    
    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email Address/i)
    const messageInput = screen.getByLabelText(/Message/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'This is a test message with enough characters' } })
    
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/Failed to send message. Please try again./i)).toBeInTheDocument()
    })
  })
})
