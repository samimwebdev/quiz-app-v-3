import React from 'react'
import AnswerCard from './AnswerCard'

export default function QuestionCard({
  quiz,
  currentAnswers,
  currentQuestionIndex,
  correctAnswer,
  pickedAnswer,
  quizzes,
  navigateNext,
  pickAnswer,
}) {
  return (
    <div className='question-card'>
      <p>
        Question : {currentQuestionIndex + 1}/ {quizzes.length}{' '}
      </p>
      <h3>{quiz.question}</h3>
      {currentAnswers.map((answer, i) => (
        <AnswerCard
          key={i}
          answer={answer}
          pickAnswer={pickAnswer}
          correctAnswer={correctAnswer}
          pickedAnswer={pickedAnswer}
        />
      ))}
      <button onClick={navigateNext}>Next</button>
    </div>
  )
}
