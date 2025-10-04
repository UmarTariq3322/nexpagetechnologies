import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// Simple admin credentials (in production, use proper authentication)
const ADMIN_CREDENTIALS = {
  email: "admin@digitalacubens.com",
  password: "admin123", // In production, use hashed passwords
}

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      // Set authentication cookie
      const cookieStore = await cookies()
      cookieStore.set("admin-auth", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
