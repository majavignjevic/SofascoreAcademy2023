import React, { useState, useEffect } from "react"
import { Question } from "../model/Question"
import { Button } from "../components/Button"

interface QuestionToReturnProps {
  categoryId: number
  resetCategory: () => void
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function QuestionToReturn(props: QuestionToReturnProps) {
  const [currentQuestion, setCurrentQuestion] = useState<Question>({id: 0, category: '', question: '', correct_answer: '', incorrect_answers: []})
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([])
  const [buttonState, setButtonState] = useState<{ [key: string]: string }>({})
  let [correctTotal, setCorrectTotal] = useState(0)
  let [falseTotal, setFalseTotal] = useState(0)
  let [total, setTotal] = useState(0)
  let [checkIfCompleted, setCheckIfCompleted] = useState(false)
  var [feedbackMessage, setFeedbackMessage] =useState('')

  const fetchQuestion = () => {
    fetch(`https://opentdb.com/api.php?amount=1&category=${props.categoryId}&type=multiple&encode=url3986`)
      .then((response) => response.json())
      .then((data) => {
        const shuffled = shuffleArray([...data.results[0].incorrect_answers, data.results[0].correct_answer])
        setCurrentQuestion(data.results[0])
        setShuffledAnswers(shuffled)
        setButtonState({})
        resetBackground()
      })
      .catch((error) => console.error(error))
  };

  useEffect(() => {
    fetchQuestion()
  },[]);
  

  const handleAnswerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const answer = event.currentTarget.value;
  
    if (answer === 'true') {
      setCorrectTotal(correctTotal + 1);
      setFeedbackMessage('Your answer is correct')
      markCorrectAnswer(event.currentTarget)
    } else {
      setFalseTotal(falseTotal + 1)
      setFeedbackMessage('Your answer is wrong')
      
      markCorrectAnswer(event.currentTarget)
    }

    setTimeout(() => {
      fetchQuestion()
      resetBackground()
      setTotal(total + 1)
    }, 1000);
  
    if (total === 14) {
      setCheckIfCompleted(true)
    }
  };
  
  const markCorrectAnswer = (button: HTMLButtonElement) => {
    const value = button.value
    if (button) {
      const newButtonState = {...buttonState}
      if (value === 'true') {
        newButtonState[value] = 'yellowgreen'
        setButtonState(newButtonState)
      } else if (value === 'false') {
        newButtonState[value] = 'crimson'
        shuffledAnswers.forEach((answer) => {
          if (answer === currentQuestion.correct_answer) {
            newButtonState[answer] = 'yellowgreen'
          } else {
            newButtonState[answer] = 'crimson'
          }
        })
        setButtonState(newButtonState)
      }
    }
  };
  
  function resetBackground() {
    setButtonState({})
  }

  const reload = (event: React.MouseEvent<HTMLButtonElement>) =>{
    setCorrectTotal(0)
    setFalseTotal(0)
    setTotal(0)
    setFeedbackMessage('')
    fetchQuestion()
    resetBackground()
    setCheckIfCompleted(false)
  }

  const returnToCategories = () =>{
    window.location.reload()
  }

  return(
    <div className="Question">
      <h1>Test your knowledge</h1>
      {checkIfCompleted ? (
        <div className="Solved">
          <h1>Congratulations!</h1>
          <p>You got {correctTotal} correct out of 15!</p><br/>
          <Button onClick={reload}>Start again this category</Button>
          <Button onClick={returnToCategories}>Start again from another category</Button>
        </div>
      ) : (
        <div className="QuestionReturned">
          <h3>Category is: {decodeURIComponent(currentQuestion.category)}</h3>
          <h4>Question: {total + 1}/15    Correct: {correctTotal}/15    False: {falseTotal}/15</h4>
          <h5 className={feedbackMessage === 'Your answer is correct' ? 'correct' : 'wrong'}>
            {feedbackMessage}
          </h5>
          <p>{decodeURIComponent(currentQuestion.question)}</p>
          <p>
            {shuffledAnswers.map((answer, index) => {
              const isCorrectAnswer = answer === currentQuestion.correct_answer;
              // const buttonStyle = {
              //   backgroundColor: buttonState[answer] || 'inherit'
              // };
              return (
                <Button
                  key={index}
                  value={isCorrectAnswer ? 'true' : 'false'}
                  onClick={handleAnswerClick}
                  onMouseDown={(event) => markCorrectAnswer(event.currentTarget)}
                  onMouseUp={() => resetBackground()}
                  style={{ backgroundColor: buttonState[isCorrectAnswer ? 'true' : 'false'] }}>
                  {decodeURIComponent(answer)}
                </Button>
              );
            })}
          </p>
        </div>
      )}
    </div>
  );
  
}

export default QuestionToReturn