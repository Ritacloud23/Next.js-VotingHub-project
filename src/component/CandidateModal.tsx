'use client'

import { X } from 'lucide-react'
import type { Candidate } from '@/data/candidates'

type CandidateModalProps = {
  candidate: Candidate
  onClose: () => void
}

export default function CandidateModal({
  candidate,
  onClose,
}: CandidateModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0c17] p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Candidate Details
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Candidate Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl font-bold text-purple-400">
            {candidate.name.charAt(0)}
          </div>

          <h3 className="mt-4 text-xl font-semibold text-white">
            {candidate.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Position: {candidate.position}
          </p>
        </div>

        {/* Vote Information */}
        <div className="mt-6 rounded-xl border border-white/10 bg-[#090a14] p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Total Votes
            </span>

            <span className="font-semibold text-purple-400">
              {candidate.votes}
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-800">
            <div
              className="h-full rounded-full bg-purple-500 transition-all duration-500"
              style={{
                width:
                  candidate.votes > 0
                    ? `${Math.min(candidate.votes * 10, 100)}%`
                    : '0%',
              }}
            />
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-purple-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-purple-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}