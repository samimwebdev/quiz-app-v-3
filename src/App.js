import { useState } from 'react'
import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'
import shuffle from './utils'
function App() {
  const [quizzes, setQuizzes] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [currentAnswers, setCurrentAnswers] = useState(null)
  const [endGame, setEndGame] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [pickedAnswer, setPickedAnswer] = useState(null)

  const pickAnswer = (answer) => {
    setPickedAnswer(answer)
    if (answer === correctAnswer) {
      setTotalScore((prevScore) => prevScore + 1)
    }
    console.log(answer)
  }

  const navigateNext = () => {
    //flushSync
    let currentQuizIndex = currentQuestionIndex + 1
    const validQuestionIndex = currentQuizIndex < quizzes.length
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizIndex)
      const question = quizzes[currentQuizIndex]
      setCurrentAnswers(shuffle(question))
      //reset picked Answer
      setPickedAnswer(null)
      //setting correct answer on question navigation
      setCorrectAnswer(question.correct_answer)
    } else {
      setEndGame(true)
    }
  }

  const resetQuiz = () => {
    setQuizzes(null)
    setLoaded(false)
    setCorrectAnswer(null)
    setEndGame(false)
    setStartQuiz(false)
    setPickedAnswer(null)
    setTotalScore(0)
    setCurrentQuestionIndex(0)
  }

  const fetchQuiz = async () => {
    const res = await fetch(
      'https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple'
    )
    const { results } = await res.json()
    setQuizzes(results)
    //getting all answers
    const initialQuestion = results[currentQuestionIndex]
    setCurrentAnswers(shuffle(initialQuestion))
    setCorrectAnswer(initialQuestion.correct_answer)
    setLoaded(true)
    setStartQuiz(true)
    console.log(results)
  }

  return (
    <>
      {!startQuiz && (
        <div>
          <button
            onClick={fetchQuiz}
            style={{ display: 'block', margin: '200px auto' }}
          >
            Start Quiz
          </button>
        </div>
      )}
      <div className='container'>
        {endGame && <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz} />}
        {loaded && !endGame && (
          <QuestionCard
            pickAnswer={pickAnswer}
            quiz={quizzes[currentQuestionIndex]}
            currentAnswers={currentAnswers}
            currentQuestionIndex={currentQuestionIndex}
            quizzes={quizzes}
            correctAnswer={correctAnswer}
            pickedAnswer={pickedAnswer}
            navigateNext={navigateNext}
          />
        )}
      </div>
    </>
  )
}

export default App
