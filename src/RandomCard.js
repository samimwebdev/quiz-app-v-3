function RandomCard({ cardValues, setPickedValue }) {
  return (
    <div>
      {cardValues.map((cardValue, index) => {
        return (
          <div
            style={{
              display: 'inline-block',
              width: '150px',
              height: '150px',
              backgroundColor: 'palevioletred',
              color: '#fff',
              lineHeight: '150px',
              fontWeight: 'bolder',
              fontSize: '30px',
              marginRight: 10,
              textAlign: 'center',
              borderRadius: '100%',
            }}
            key={index}
            onClick={() => setPickedValue(cardValue)}
          >
            {cardValue}
          </div>
        )
      })}
    </div>
  )
}

export default RandomCard
