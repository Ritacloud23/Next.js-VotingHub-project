'use client'

import { useCandidates } from '@/hooks/useCandidates'

export default function CandidatesPage() {
  const { candidates, isLoading } = useCandidates()

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#05060d] p-6 text-white">
        <p className="text-gray-500">
          Loading candidates...
        </p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#05060d] p-6 text-white lg:p-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-2xl font-bold">
          Candidates
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          List of candidates in the election.
        </p>

        <div className="mt-6 space-y-3">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="rounded-xl border border-white/10 bg-[#0b0c17] p-4"
            >
              <p className="font-medium text-white">
                {candidate.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}