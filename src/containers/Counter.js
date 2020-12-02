import React, { useState } from 'react'
import { connect } from 'react-redux'
import { increase } from '../features/counter/counterSlice'

const mapDispatch = { increase }
const Counter = ({ count,  increase }) => {
  return (
    <div>
      <button onClick={() => {
        increase()
      }}>
        {count}
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, mapDispatch)(Counter)