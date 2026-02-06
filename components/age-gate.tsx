"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface AgeGateProps {
  onVerified: () => void
}

export function AgeGate({ onVerified }: AgeGateProps) {
  const [email, setEmail] = useState("")
  const [birthday, setBirthday] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !birthday) {
      setError("Please fill in all fields")
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Calculate age from birthday
    const birthDate = new Date(birthday)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    // Check if user is 21 or older
    if (age < 21) {
      setError("You must be 21 or older to enter")
      return
    }

    // Store verification in localStorage
    try {
      localStorage.setItem("ageVerified", "true")
    } catch (error) {
      console.error("Failed to save age verification:", error)
    }
    onVerified()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/444a166f-a314-4abb-bc3c.jpeg"
          alt="Internet Kartel Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="space-y-8 text-center">
          {/* Logo */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 40 40"
                className="h-16 w-16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2L26 12L38 14L29 23L31 36L20 30L9 36L11 23L2 14L14 12L20 2Z"
                  fill="#EF4444"
                />
              </svg>
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              INTERNET <span className="text-[#10B981]">KARTEL</span>
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2 text-left">
                <Label htmlFor="birthday" className="text-sm font-medium text-white">
                  Date of Birth
                </Label>
                <Input
                  id="birthday"
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#10B981] focus:ring-[#10B981]"
                  required
                />
              </div>

              <div className="space-y-2 text-left">
                <Label htmlFor="email" className="text-sm font-medium text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#10B981] focus:ring-[#10B981]"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-sm font-medium text-red-400">{error}</p>
            )}

            <Button
              type="submit"
              className="h-12 w-full bg-[#10B981] text-lg font-semibold text-black hover:bg-[#10B981]/90"
            >
              Enter Site
            </Button>

            <p className="text-xs text-white/60">
              By entering, you confirm you are 21 years or older and agree to our terms of service.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
