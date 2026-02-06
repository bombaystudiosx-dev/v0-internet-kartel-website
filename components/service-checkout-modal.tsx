"use client"

import React from "react"

import { useState, type ChangeEvent } from "react"
import { X } from "lucide-react"

interface ServiceCheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  servicePrice: string
  serviceDescription: string
}

const brandCategories = [
  "Streetwear",
  "Luxury Fashion",
  "Athletic/Sportswear",
  "Sustainable Fashion",
  "Vintage/Retro",
  "Minimalist Fashion",
  "High Fashion/Couture",
  "Urban Fashion",
  "Y2K Fashion",
  "Athleisure",
  "Workwear/Utility",
  "Bohemian/Boho",
  "Punk/Alternative",
  "Elegant/Formal",
  "Casual/Everyday",
  "Beauty/Cosmetics",
  "Skincare",
  "Haircare/Salon",
  "Nail Salon/Manicure",
  "Spa/Wellness",
  "Fitness/Gym",
  "Yoga/Pilates",
  "Personal Training",
  "Nutrition/Health",
  "Restaurant/Dining",
  "Cafe/Coffee Shop",
  "Bar/Nightlife",
  "Food Truck",
  "Catering",
  "Music/Entertainment",
  "Photography",
  "Videography",
  "Graphic Design",
  "Web Design/Development",
  "Marketing/Advertising",
  "Real Estate",
  "Interior Design",
  "Architecture",
  "Automotive",
  "Technology/Tech Startup",
  "Consulting/Professional Services",
  "Legal Services",
  "Financial Services",
  "E-commerce/Online Retail",
  "Jewelry/Accessories",
  "Home Decor",
  "Art/Gallery",
  "Cannabis/CBD",
  "Other"
]

export function ServiceCheckoutModal({
  isOpen,
  onClose,
  serviceName,
  servicePrice,
  serviceDescription,
}: ServiceCheckoutModalProps) {
  const [formData, setFormData] = useState({
    instagramHandle: "",
    website: "",
    description: "",
    hasLogo: "yes",
    selectedCategories: [] as string[],
  })
  const [logoFile, setLogoFile] = useState<File | null>(null)

  if (!isOpen) return null

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0])
    }
  }

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => {
      const isSelected = prev.selectedCategories.includes(category)
      return {
        ...prev,
        selectedCategories: isSelected
          ? prev.selectedCategories.filter((c) => c !== category)
          : [...prev.selectedCategories, category],
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add actual checkout/payment processing here
    alert("Order submitted! We'll be in touch soon.")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card p-6">
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-foreground">
              {serviceName}
            </h2>
            <div className="flex items-center gap-3">
              <span className="font-display text-xl font-bold text-primary">{servicePrice}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{serviceDescription}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center border border-border bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <div className="flex flex-col gap-8">
            {/* Contact Information */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Contact Information
              </h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="instagramHandle" className="text-sm font-semibold text-foreground">
                  Instagram Handle <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="instagramHandle"
                  name="instagramHandle"
                  value={formData.instagramHandle}
                  onChange={handleInputChange}
                  placeholder="@yourusername"
                  required
                  className="min-h-[48px] border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="website" className="text-sm font-semibold text-foreground">
                  Website <span className="text-xs text-muted-foreground">(optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                  className="min-h-[48px] border border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Project Details
              </h3>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-semibold text-foreground">
                  What are you trying to accomplish? <span className="text-primary">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell us about your vision, goals, and what you want to achieve with this project..."
                  required
                  rows={6}
                  className="border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
            </div>

            {/* Logo Upload */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Brand Assets
              </h3>
              
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-foreground">
                  Do you have a logo?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasLogo"
                      value="yes"
                      checked={formData.hasLogo === "yes"}
                      onChange={handleInputChange}
                      className="h-4 w-4 border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">Yes, I have one</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasLogo"
                      value="no"
                      checked={formData.hasLogo === "no"}
                      onChange={handleInputChange}
                      className="h-4 w-4 border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">No, I need one created</span>
                  </label>
                </div>
              </div>

              {formData.hasLogo === "yes" && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="logo" className="text-sm font-semibold text-foreground">
                    Upload Your Logo
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="logo"
                      onChange={handleLogoUpload}
                      accept="image/*,.pdf,.ai,.eps,.svg"
                      className="min-h-[48px] w-full border border-border bg-background px-4 py-3 text-sm text-foreground file:mr-4 file:border-0 file:bg-secondary file:px-4 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:tracking-wider file:text-foreground hover:file:bg-secondary/80"
                    />
                  </div>
                  {logoFile && (
                    <p className="text-xs text-muted-foreground">Selected: {logoFile.name}</p>
                  )}
                </div>
              )}
            </div>

            {/* Brand Categories */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Brand Category <span className="text-xs font-normal text-muted-foreground normal-case tracking-normal">(Select all that apply)</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto border border-border p-4 bg-background/50">
                {brandCategories.map((category) => (
                  <label
                    key={category}
                    className="flex items-start gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.selectedCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="mt-0.5 h-4 w-4 flex-shrink-0 border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Selected: {formData.selectedCategories.length} {formData.selectedCategories.length === 1 ? 'category' : 'categories'}
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <button
                type="submit"
                className="flex min-h-[56px] w-full items-center justify-center bg-primary font-display text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex min-h-[48px] w-full items-center justify-center border border-border bg-transparent font-display text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
