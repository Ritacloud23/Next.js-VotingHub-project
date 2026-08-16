'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  LayoutDashboard,
  Users,
  Trophy,
  UserCheck,
  Settings,
  Menu,
  X,
} from 'lucide-react'

const menuItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Candidates',
    href: '/candidates',
    icon: Users,
  },
  {
    name: 'Results',
    href: '/results',
    icon: Trophy,
  },
  {
    name: 'Voters',
    href: '/voters',
    icon: UserCheck,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

export default function Sidebar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* ================================
          Mobile Menu Button
      ================================= */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#090a14] text-gray-300 transition hover:bg-purple-500/10 hover:text-white lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* ================================
          Mobile Overlay
      ================================= */}
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-label="Close menu"
        />
      )}

      {/* ================================
          Sidebar
      ================================= */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-white/10 bg-[#090a14] transition-transform duration-300 lg:sticky lg:top-0 lg:z-30 lg:min-h-screen lg:translate-x-0 ${
          isOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col p-6">

          {/* ================================
              Header / Logo
          ================================= */}
          <div className="flex items-center justify-between">

            <Link
              href="/"
              onClick={handleNavigation}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white-600 font-bold text-white">
                V
              </div>

              <div>
                <h1 className="font-semibold text-white">
                  VoteHub
                </h1>

                <p className="text-xs text-gray-500">
                  Voting System
                </p>
              </div>
            </Link>

            {/* Mobile Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white lg:hidden"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>

          </div>

          {/* ================================
              Navigation
          ================================= */}
          <nav className="mt-8 space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive =
                router.pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigation}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                    isActive
                      ? 'bg-white-600/15 text-white-400'
                      : 'text-gray-400 hover:bg-purple-500/10 hover:text-white'
                  }`}
                >
                  <Icon size={18} />

                  <span>{item.name}</span>
                </Link>
              )
            })}

          </nav>

        </div>
      </aside>
    </>
  )
}