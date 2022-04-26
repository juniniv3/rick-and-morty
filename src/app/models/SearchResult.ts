import { Character } from "./Character"

export interface SearchResult {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: Character []
}
