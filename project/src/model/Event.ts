import { Score } from "./Score"
import { Team } from "./Team"
import { Tournament } from "./Tournament"

export interface Event{
    id: number
    slug: number
    tournamet: Tournament
    homeTeam: Team
    awayTeam: Team
    status: string
    startDate: string    
    homeScore: Score
    awayScore: Score
    winnerCode: string
    round: number
}