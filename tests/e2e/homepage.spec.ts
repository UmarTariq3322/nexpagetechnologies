import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/')
    
    // Check if the page title is correct
    await expect(page).toHaveTitle(/Digital Acubens/)
    
    // Check if the main heading is visible
    await expect(page.getByRole('heading', { name: /Shaping brands in the digital constellations/i })).toBeVisible()
    
    // Check if navigation is present
    await expect(page.getByRole('navigation')).toBeVisible()
    
    // Check if main sections are present
    await expect(page.getByText(/Our Services/i)).toBeVisible()
    await expect(page.getByText(/Featured projects/i)).toBeVisible()
    await expect(page.getByText(/What our clients say/i)).toBeVisible()
  })

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/')
    
    // Test navigation links
    await page.getByRole('link', { name: /About/i }).click()
    await expect(page).toHaveURL('/about')
    
    await page.getByRole('link', { name: /Services/i }).click()
    await expect(page).toHaveURL('/services')
    
    await page.getByRole('link', { name: /Portfolio/i }).click()
    await expect(page).toHaveURL('/portfolio')
    
    await page.getByRole('link', { name: /Contact/i }).click()
    await expect(page).toHaveURL('/contact')
  })

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/')
    
    // Test main CTA buttons
    await page.getByRole('link', { name: /Get a Free Demo/i }).click()
    await expect(page).toHaveURL('/contact')
    
    await page.goBack()
    
    await page.getByRole('link', { name: /Explore Services/i }).click()
    await expect(page).toHaveURL('/services')
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Check if mobile navigation works
    await page.getByRole('button', { name: /Toggle Menu/i }).click()
    await expect(page.getByRole('navigation')).toBeVisible()
    
    // Check if content is readable on mobile
    await expect(page.getByRole('heading', { name: /Shaping brands in the digital constellations/i })).toBeVisible()
  })

  test('should have proper accessibility features', async ({ page }) => {
    await page.goto('/')
    
    // Check for proper heading hierarchy
    const h1 = page.getByRole('heading', { level: 1 })
    await expect(h1).toBeVisible()
    
    // Check for proper link accessibility
    const links = page.getByRole('link')
    const linkCount = await links.count()
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i)
      await expect(link).toHaveAttribute('href')
    }
    
    // Check for proper button accessibility
    const buttons = page.getByRole('button')
    const buttonCount = await buttons.count()
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const ariaLabel = await button.getAttribute('aria-label')
      const textContent = await button.textContent()
      
      // Either has aria-label or visible text
      expect(ariaLabel || textContent).toBeTruthy()
    }
  })

  test('should load chatbot widget', async ({ page }) => {
    await page.goto('/')
    
    // Check if chatbot button is present
    await expect(page.getByRole('button', { name: /Open chat/i })).toBeVisible()
    
    // Test chatbot interaction
    await page.getByRole('button', { name: /Open chat/i }).click()
    await expect(page.getByText(/Digital Acubens AI/i)).toBeVisible()
  })
})
