import React, { Component } from 'react'
import LoadingOverlay from './LoadingOverlay'
import CircleAnimation from './CircleAnimation'

class LoadingAnimation extends Component {
  render () {
    let divStyle = {
      display: (this.props.isLoading === true) ? 'block' : 'none'
    }

    return (
      <div style={divStyle}>
        <LoadingOverlay>
          <CircleAnimation />
        </LoadingOverlay>
      </div>
    )
  }
}

export default LoadingAnimation