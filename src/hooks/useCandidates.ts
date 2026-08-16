import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import {
  candidates as initialCandidates,
  type Candidate,
} from '@/data/candidates'

const CANDIDATES_KEY = ['candidates']
const VOTERS_KEY = ['voters']

type Voter = {
  name: string
  candidateId: number
}

function getCandidates(): Candidate[] {
  if (typeof window === 'undefined') {
    return initialCandidates
  }

  const saved = localStorage.getItem(
    'votehub-candidates'
  )

  return saved
    ? JSON.parse(saved)
    : initialCandidates
}

function getVoters(): Voter[] {
  if (typeof window === 'undefined') {
    return []
  }

  const saved = localStorage.getItem(
    'votehub-voters'
  )

  return saved ? JSON.parse(saved) : []
}

export function useCandidates() {
  const queryClient = useQueryClient()

  /* ================================
     GET CANDIDATES
  ================================= */

  const candidatesQuery = useQuery({
    queryKey: CANDIDATES_KEY,
    queryFn: getCandidates,
  })

  /* ================================
     GET VOTERS
  ================================= */

  const votersQuery = useQuery({
    queryKey: VOTERS_KEY,
    queryFn: getVoters,
  })

  /* ================================
     VOTE
  ================================= */

  const voteMutation = useMutation({
    mutationFn: async ({
      candidateId,
      voterName,
    }: {
      candidateId: number
      voterName: string
    }) => {
      const name = voterName.trim()

      if (!name) {
        throw new Error(
          'Please enter your name.'
        )
      }

      const voters = getVoters()

      const alreadyVoted = voters.some(
        (voter) =>
          voter.name.toLowerCase() ===
          name.toLowerCase()
      )

      if (alreadyVoted) {
        throw new Error(
          `${name} has already voted.`
        )
      }

      const currentCandidates =
        getCandidates()

      const candidateExists =
        currentCandidates.some(
          (candidate) =>
            candidate.id === candidateId
        )

      if (!candidateExists) {
        throw new Error(
          'Candidate not found.'
        )
      }

      const updatedCandidates =
        currentCandidates.map(
          (candidate) =>
            candidate.id === candidateId
              ? {
                  ...candidate,
                  votes: candidate.votes + 1,
                }
              : candidate
        )

      const updatedVoters = [
        ...voters,
        {
          name,
          candidateId,
        },
      ]

      localStorage.setItem(
        'votehub-candidates',
        JSON.stringify(updatedCandidates)
      )

      localStorage.setItem(
        'votehub-voters',
        JSON.stringify(updatedVoters)
      )

      return {
        candidates: updatedCandidates,
        voters: updatedVoters,
      }
    },

    onSuccess: ({
      candidates,
      voters,
    }) => {
      queryClient.setQueryData(
        CANDIDATES_KEY,
        candidates
      )

      queryClient.setQueryData(
        VOTERS_KEY,
        voters
      )
    },
  })

  /* ================================
     ADD CANDIDATE
  ================================= */

  const addCandidateMutation =
    useMutation({
      mutationFn: async ({
        name,
        position,
      }: {
        name: string
        position: string
      }) => {
        const candidateName = name.trim()
        const candidatePosition =
          position.trim()

        if (!candidateName) {
          throw new Error(
            'Please enter the candidate name.'
          )
        }

        if (!candidatePosition) {
          throw new Error(
            'Please enter the candidate position.'
          )
        }

        const currentCandidates =
          getCandidates()

        /* Prevent duplicate candidate names */

        const alreadyExists =
          currentCandidates.some(
            (candidate) =>
              candidate.name
                .toLowerCase() ===
              candidateName.toLowerCase()
          )

        if (alreadyExists) {
          throw new Error(
            'This candidate already exists.'
          )
        }

        /* Create a new ID */

        const newId =
          currentCandidates.length > 0
            ? Math.max(
                ...currentCandidates.map(
                  (candidate) =>
                    candidate.id
                )
              ) + 1
            : 1

        const newCandidate: Candidate = {
          id: newId,
          name: candidateName,
          position: candidatePosition,
          votes: 0,
          image: '',
        }

        const updatedCandidates = [
          ...currentCandidates,
          newCandidate,
        ]

        /* Save to localStorage */

        localStorage.setItem(
          'votehub-candidates',
          JSON.stringify(updatedCandidates)
        )

        return updatedCandidates
      },

      onSuccess: (
        updatedCandidates
      ) => {
        queryClient.setQueryData(
          CANDIDATES_KEY,
          updatedCandidates
        )
      },
    })

  /* ================================
     RETURN
  ================================= */

  return {
    candidates:
      candidatesQuery.data ?? [],

    voters:
      votersQuery.data ?? [],

    isLoading:
      candidatesQuery.isLoading,

    isError:
      candidatesQuery.isError,

    /* Voting */

    vote: voteMutation.mutate,

    isVoting:
      voteMutation.isPending,

    voteError:
      voteMutation.error,

    /* Add Candidate */

    addCandidate:
      addCandidateMutation.mutate,

    isAddingCandidate:
      addCandidateMutation.isPending,

    addCandidateError:
      addCandidateMutation.error,
  }
}