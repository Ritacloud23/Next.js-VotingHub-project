'use client'

import { useCandidates } from '@/hooks/useCandidates'

export default function ResultsPage() {
  const { candidates, isLoading } = useCandidates()

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#05060d] p-6 text-white lg:p-8">
        <p className="text-gray-500">
          Loading results...
        </p>
      </main>
    )
  }

  const sortedCandidates = [...candidates].sort(
    (a, b) => b.votes - a.votes
  )

  const totalVotes = candidates.reduce(
    (total, candidate) => total + candidate.votes,
    0
  )

  return (
    <main className="min-h-screen bg-[#05060d] p-6 text-white lg:p-8">
      <div className="mx-auto max-w-4xl">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Results
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Current election results.
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

        <div className="mt-6 space-y-3">
          {sortedCandidates.map((candidate, index) => (
            <div
              key={candidate.id}
              className="rounded-xl border border-white/10 bg-[#0b0c17] p-4"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-sm font-semibold text-purple-400">
                  {index + 1}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white">
                    {candidate.name}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {candidate.votes}{' '}
                    {candidate.votes === 1
                      ? 'vote'
                      : 'votes'}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-purple-400">
                    {candidate.votes}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}