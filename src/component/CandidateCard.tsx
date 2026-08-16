'use client'

import type { Candidate } from '@/data/candidates'

type CandidateCardProps = {
  candidate: Candidate
  maxVotes: number
  hasVoted: boolean
  isSelected: boolean
  isVoting: boolean
  onVote: (candidateId: number) => void
  onView: (candidate: Candidate) => void
}

export default function CandidateCard({
  candidate,
  maxVotes,
  hasVoted,
  isSelected,
  isVoting,
  onVote,
  onView,
}: CandidateCardProps) {
  const votePercent = maxVotes > 0 ? (candidate.votes / maxVotes) * 100 : 0

  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        isSelected
          ? 'border-purple-500 bg-purple-500/10'
          : 'border-white/10 bg-[#0b0c17]'
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => onView(candidate)}
          className="flex flex-1 items-center gap-4 text-left"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-lg font-bold text-purple-400">
            {candidate.name.charAt(0)}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-base font-semibold text-white">
                {candidate.name}
              </p>
              <span className="text-sm text-gray-400">
                {candidate.votes} votes
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              {candidate.position}
            </p>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-800">
              <div
                className="h-full rounded-full bg-purple-500 transition-all duration-500"
                style={{ width: `${Math.min(votePercent, 100)}%` }}
              />
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onVote(candidate.id)}
          disabled={hasVoted || isVoting}
          className="rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
        >
          Vote
        </button>
      </div>
    </div>
  )
}