'use client'

import { useState } from 'react'

import type { Candidate } from '@/data/candidates'
import { useCandidates } from '@/hooks/useCandidates'

import CandidateCard from './CandidateCard'
import CandidateModal from './CandidateModal'
import VoterName from './VoterName'

export default function Candidates() {
  const [voterName, setVoterName] = useState('')
  const [selectedCandidate, setSelectedCandidate] =
    useState<Candidate | null>(null)

  const {
    candidates,
    voters,
    isLoading,
    isError,
    vote,
    isVoting,
    voteError,
  } = useCandidates()

  if (isLoading) {
    return (
      <section className="rounded-xl border border-white/10 bg-[#090a14] p-6">
        <p className="text-sm text-gray-500">
          Loading candidates...
        </p>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="rounded-xl border border-red-500/20 bg-[#090a14] p-6">
        <p className="text-sm text-red-400">
          Failed to load candidates.
        </p>
      </section>
    )
  }

  const maxVotes = Math.max(
    ...candidates.map((candidate) => candidate.votes),
    0
  )

  const totalVotes = candidates.reduce(
    (total, candidate) => total + candidate.votes,
    0
  )

  const normalizedName = voterName.trim().toLowerCase()

  const currentVoter = voters.find(
    (voter) => voter.name.toLowerCase() === normalizedName
  )

  const hasVoted = Boolean(currentVoter)

  return (
    <section className="rounded-xl border border-white/10 bg-[#090a14] p-4 sm:p-6">
      <div className="mb-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Candidates
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter your name and choose one candidate.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#0b0c17] px-4 py-2">
            <p className="text-xs text-gray-500">
              Total Votes
            </p>

            <p className="text-lg font-semibold text-purple-400">
              {totalVotes}
            </p>
          </div>
        </div>
      </div>

      <VoterName
        name={voterName}
        onNameChange={setVoterName}
      />

      {hasVoted && currentVoter && (
        <div className="mb-5 rounded-lg border border-green-500/20 bg-green-500/10 p-4">
          <p className="font-medium text-green-400">
            ✓ You have already voted
          </p>

          <p className="mt-1 text-sm text-gray-400">
            {currentVoter.name} has already voted.
          </p>
        </div>
      )}

      {!voterName.trim() && (
        <div className="mb-5 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
          <p className="text-sm text-yellow-400">
            Enter your name above to vote.
          </p>
        </div>
      )}

      <div className="space-y-3">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            maxVotes={maxVotes}
            hasVoted={hasVoted || !voterName.trim()}
            isSelected={currentVoter?.candidateId === candidate.id}
            isVoting={isVoting}
            onVote={(candidateId: number) => {
              vote({
                candidateId,
                voterName,
              })
            }}
            onView={(candidateItem: Candidate) => {
              setSelectedCandidate(candidateItem)
            }}
          />
        ))}
      </div>

      {voteError && (
        <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
          <p className="text-sm text-red-400">
            {voteError.message}
          </p>
        </div>
      )}

      {selectedCandidate && (
        <CandidateModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </section>
  )
}