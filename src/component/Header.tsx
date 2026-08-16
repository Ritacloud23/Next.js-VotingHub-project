'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

import { useCandidates } from '@/hooks/useCandidates'
import AddCandidateModal from './AddCandidateModal'

export default function Header() {
  const [showAddCandidate, setShowAddCandidate] = useState(false)

  const { addCandidate, isAddingCandidate, addCandidateError } =
    useCandidates()

  const handleAddCandidate = (data: {
    name: string
    position: string
  }) => {
    addCandidate(data, {
      onSuccess: () => {
        setShowAddCandidate(false)
      },
    })
  }

  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Voting Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-400 sm:text-base">
          Vote for your preferred candidate
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowAddCandidate(true)}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-purple-500 sm:w-auto"
      >
        <Plus size={18} />
        Add Candidate
      </button>

      {showAddCandidate && (
        <AddCandidateModal
          onClose={() => setShowAddCandidate(false)}
          onAdd={handleAddCandidate}
          isAdding={isAddingCandidate}
          error={addCandidateError}
        />
      )}
    </header>
  )
}