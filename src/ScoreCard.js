export default function ScoreCard({ totalScore, resetQuiz }) {
  return (
    <div className='result'>
      <h3>Result page</h3>
      <p>Score {totalScore}</p>
      <button onClick={resetQuiz} className='btn restart-btn'>
        Reset Quiz
      </button>
    </div>
  )
}
