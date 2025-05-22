import React from 'react'
import { Search, Calendar, MessageSquare, Star } from "lucide-react"

export const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find",
      description: "Search for tutors by subject, availability, and price",
    },
    {
      icon: Calendar,
      title: "Book",
      description: "Schedule sessions that fit your calendar",
    },
    {
      icon: MessageSquare,
      title: "Connect",
      description: "Message your tutor to discuss learning goals",
    },
    {
      icon: Star,
      title: "Review",
      description: "Rate your experience and provide feedback",
    },
  ]

  return (
    <div className="text-black flex items-center py-20 px-4">
      <div className="w-full max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">How It Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center px-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <step.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
