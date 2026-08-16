'use client'

import { useState } from 'react'
import { X, UserPlus } from 'lucide-react'

type AddCandidateModalProps = {
  onClose: () => void
  onAdd: (data: {
    name: string
    position: string
  }) => void
  isAdding: boolean
  error: Error | null
}

export default function AddCandidateModal({
  onClose,
  onAdd,
  isAdding,
  error,
}: AddCandidateModalProps) {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    onAdd({
      name,
      position,
    })
  }

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
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
              <UserPlus size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Add Candidate
              </h2>

              <p className="text-xs text-gray-500">
                Add a new election candidate
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="candidate-name"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Candidate Name
            </label>

            <input
              id="candidate-name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter candidate name"
              className="w-full rounded-lg border border-white/10 bg-[#090a14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
            />
          </div>

          {/* Position */}
          <div>
            <label
              htmlFor="candidate-position"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Position
            </label>

            <input
              id="candidate-position"
              type="text"
              value={position}
              onChange={(event) =>
                setPosition(event.target.value)
              }
              placeholder="e.g. President"
              className="w-full rounded-lg border border-white/10 bg-[#090a14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
              <p className="text-sm text-red-400">
                {error.message}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isAdding}
              className="flex-1 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={
                isAdding ||
                !name.trim() ||
                !position.trim()
              }
              className="flex flex-1 items-center justify-center rounded-lg bg-purple-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isAdding
                ? 'Adding...'
                : 'Add Candidate'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}