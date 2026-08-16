'use client'

type VoterNameProps = {
  name: string
  onNameChange: (name: string) => void
}

export default function VoterName({
  name,
  onNameChange,
}: VoterNameProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor="voter-name"
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        Your Name
      </label>

      <input
        id="voter-name"
        type="text"
        value={name}
        onChange={(event) =>
          onNameChange(event.target.value)
        }
        placeholder="Enter your name"
        className="w-full rounded-lg border border-white/10 bg-[#0b0c17] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
      />

      <p className="mt-2 text-xs text-gray-500">
        You can only vote once with this name.
      </p>
    </div>
  )
}