"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'

export const Navbar = () => {
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 border-b shadow-sm">
      <div className="flex justify-between items-center h-16 px-4 md:px-6">
        {/* Logo */}
        <Link href="/home" className="text-xl font-bold text-gray-800">
          Phoenix Tutorium
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className={`transition-all duration-200 ${isSearchOpen ? 'w-80' : 'w-60'}`}>
            <div className="relative text-gray-600">
              <SearchIcon className="absolute left-2 top-2.5" fontSize="small" />
              <InputBase
                placeholder="Search tutors..."
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
                className="pl-8 pr-2 py-1 w-full rounded border border-gray-300"
              />
            </div>
          </div>
          <Link
            href="/about"
            className={`text-sm font-medium hover:text-blue-600 ${pathname === "/about" ? "text-blue-600" : "text-gray-600"}`}
          >
            About
          </Link>
          <Link
            href="/search"
            className={`text-sm font-medium hover:text-blue-600 ${pathname === "/search" ? "text-blue-600" : "text-gray-600"}`}
          >
            Browse Tutors
          </Link>
          <Link
            href="/signin"
            className="text-sm border border-gray-300 px-3 py-1 rounded hover:border-blue-600 transition"
          >
            Log in
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <IconButton onClick={handleMenuOpen} size="large" edge="end" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem component={Link} href="/about" onClick={handleMenuClose}>About</MenuItem>
            <MenuItem component={Link} href="/search" onClick={handleMenuClose}>Browse Tutors</MenuItem>
            <MenuItem component={Link} href="/signin" onClick={handleMenuClose}>Log in</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}
