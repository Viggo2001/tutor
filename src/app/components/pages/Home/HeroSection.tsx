import React from 'react'
import Link from 'next/link'

const SearchComponent = () => {
  return (
    <div className="shadow-md w-full bg-white grid grid-cols-1 sm:grid-cols-3 gap-2 p-4 rounded-lg">
      <input
        type="text"
        placeholder="Subject"
        className="text-center border border-gray-300 rounded-md px-2 py-2"
      />
      <input
        type="text"
        placeholder="Location"
        className="text-center border border-gray-300 rounded-md px-2 py-2"
      />
      <button className="bg-blue-600 text-white rounded-md hover:bg-blue-700 transition px-4 py-2">
        Search
      </button>
    </div>
  )
}

export const HeroSection = () => {
  return (
    <div className="h-[60vh] bg-pink-100 flex items-center">
      <div className="w-full px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Find Your Perfect Tutor Match
          </h1>
          <p className="text-gray-700 max-w-md text-base sm:text-lg">
            Connect with expert tutors who match your learning style, goals, and schedule.
          </p>

          <div className="w-full">
            <SearchComponent />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link href="/search">
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition w-full sm:w-auto">
                Find a Tutor
              </button>
            </Link>
            <Link href="/signup?as=tutor">
              <button className="px-6 py-3 rounded-md border border-gray-300 hover:border-blue-600 transition w-full sm:w-auto">
                Become a Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
