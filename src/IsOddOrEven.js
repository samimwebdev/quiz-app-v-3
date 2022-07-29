import styles from './App.module.css'
function IsOddOrEven({ count, pickedValue }) {
  const oddOrEven = pickedValue % 2 === 0 ? 'even' : 'odd'

  return (
    <>
      {/* <h3 className={styles.random}>
        Number is {count % 2 === 0 ? 'Even' : 'Odd'}
      </h3> */}
      <h3>
        Number is{' '}
        {pickedValue && (
          <span className={oddOrEven === 'even' ? styles.even : styles.odd}>
            {oddOrEven}
          </span>
        )}
      </h3>
    </>
  )
}

export default IsOddOrEven
