import { cookies } from "next/headers"

export async function checkAdminAuth(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const authCookie = cookieStore.get("admin-auth")
    return authCookie?.value === "authenticated"
  } catch (error) {
    return false
  }
}
