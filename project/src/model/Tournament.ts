import { Country } from "./Country"
import { Sport } from "./Sport"

export interface Tournament{
    homeTeam: ReactNode
    awayTeam: ReactNode
    id: number
    name: string
    slug: string
    sport: Sport
    country: Country
}