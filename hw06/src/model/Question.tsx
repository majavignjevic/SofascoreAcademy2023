export interface Question {
    id: number
    category: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}