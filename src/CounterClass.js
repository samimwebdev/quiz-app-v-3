import React, { Component } from 'react'

export default class CounterClass extends Component {
  state = {
    count: 0,
  }
  handleIncrement = (num) => {
    this.setState({
      count: this.state.count + num,
    })
  }
  handleDecrement = (num) => {
    this.setState({
      count: this.state.count - num,
    })
  }

  handleReset = () => {
    this.setState({
      count: 0,
    })
  }
  render() {
    return (
      <div className='container'>
        <h2>Count : {this.state.count}</h2>
        <button onClick={() => this.handleIncrement(1)}>Increment</button>
        <button onClick={() => this.handleDecrement(1)}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
