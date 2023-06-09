import { Country } from "./Country"

export interface Team{
    id: number
    name: string
    country: Country
    managerName: string
    venue: string
}