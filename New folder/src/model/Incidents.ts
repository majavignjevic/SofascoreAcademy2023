import { Player } from "./Player";

export interface Incidents{
    player: Player 
    teamSide: string
    color: string
    id: number
    time: number
    type: string
}