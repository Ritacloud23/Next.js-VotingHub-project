'use client'

import { useCandidates } from '@/hooks/useCandidates'

export default function VotersPage() {
  const { voters, isLoading } = useCandidates()

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#05060d] p-6 text-white lg:p-8">
        <p className="text-gray-500">
          Loading voters...
        </p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#05060d] p-6 text-white lg:p-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-2xl font-bold">
          Voters
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          People who have voted.
        </p>

        <div className="mt-6 space-y-3">
          {voters.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-[#0b0c17] p-6">
              <p className="text-sm text-gray-500">
                No one has voted yet.
              </p>
            </div>
          ) : (
            voters.map((voter) => (
              <div
                key={voter.name}
                className="rounded-xl border border-white/10 bg-[#0b0c17] p-4"
              >
                <p className="font-medium text-white">
                  {voter.name}
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  )
}