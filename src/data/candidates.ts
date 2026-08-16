export type Candidate = {
  id: number
  name: string
  position: string
  votes: number
  image: string
}

export type candidate = Candidate

export const candidates: Candidate[] = [
  {
    id: 1,
    name: 'John',
    position: 'President',
    votes: 0,
    image: '',
  },
  {
    id: 2,
    name: 'Mary',
    position: 'President',
    votes: 0,
    image: '',
  },
  {
    id: 3,
    name: 'David',
    position: 'President',
    votes: 0,
    image: '',
  },
  {
    id: 4,
    name: 'Grace',
    position: 'President',
    votes: 0,
    image: '',
  },
]