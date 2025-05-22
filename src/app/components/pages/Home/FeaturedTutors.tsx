"use client"

import React from "react";
import { useState } from "react";
import TutorCard from '../../ui/TutorCard';

// Replace with real data source when available
const Tutors = [
  {
    id: "1",
    name: "Dr. Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    subjects: ["Mathematics", "Physics", "Engineering"],
    rating: 4.9,
    hourlyRate: 45,
    featured: true,
  },
  {
    id: "2",
    name: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    subjects: ["English", "Writing", "Grammar"],
    rating: 4.7,
    hourlyRate: 38,
    featured: true,
  },
  {
    id: "3",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    subjects: ["Programming", "Computer Science", "AI"],
    rating: 4.8,
    hourlyRate: 50,
    featured: false,
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    subjects: ["Spanish", "French", "Italian"],
    rating: 4.6,
    hourlyRate: 40,
    featured: false,
  },
];

export function FeaturedTutors() {
  const [tutors] = useState(Tutors);

  return (
    <div className="bg-purple-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Tutors</h2>
          <p className="text-gray-600">Connect with our top-rated tutors</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} {...tutor} />
          ))}
        </div>
      </div>
    </div>
  );
}
