'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'

export function EmergencyBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="bg-[#1e3a8a] text-white text-sm px-4 py-2.5 flex items-center justify-center gap-3 flex-wrap">
      <span className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
        <strong>Emergency callouts available today</strong>
        <span className="hidden sm:inline">— Gas Safe engineers on the road across Brent</span>
      </span>
      <a
        href="tel:07930909496"
        className="bg-white text-primary font-semibold text-xs px-4 py-1 rounded-full whitespace-nowrap hover:bg-secondary transition-colors flex items-center gap-1.5"
      >
        <Phone className="w-3 h-3" />
        Call: 07930 909496
      </a>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="text-white/50 hover:text-white text-lg leading-none ml-1"
      >
        ×
      </button>
    </div>
  )
}
