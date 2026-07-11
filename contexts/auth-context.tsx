"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  role: "developer" | "admin"
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        // In a real app, this would verify the session/token with the server
        const storedUser = localStorage.getItem("nexusbank_user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Authentication error:", error)
      } finally {
        setLoading(false)
      }
    }

    checkUserLoggedIn()
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      // In a real app, this would make an API call to authenticate
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll accept any email/password with basic validation
      if (!email.includes("@") || password.length < 6) {
        throw new Error("Invalid credentials")
      }

      const newUser: User = {
        id: "usr_" + Math.random().toString(36).substring(2, 11),
        name: email.split("@")[0],
        email,
        role: "developer",
      }

      setUser(newUser)
      localStorage.setItem("nexusbank_user", JSON.stringify(newUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setLoading(true)
    try {
      // In a real app, this would make an API call to register
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Basic validation
      if (!email.includes("@") || password.length < 6 || !name) {
        throw new Error("Invalid registration details")
      }

      const newUser: User = {
        id: "usr_" + Math.random().toString(36).substring(2, 11),
        name,
        email,
        role: "developer",
      }

      setUser(newUser)
      localStorage.setItem("nexusbank_user", JSON.stringify(newUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("nexusbank_user")
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
