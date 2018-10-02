import React, { Component } from 'react'
import LoadingOverlay from './LoadingOverlay'
import CircleAnimation from './CircleAnimation'

class LoadingAnimation extends Component {
  render () {
    const { isLoading, color } = this.props
    let divStyle = {
      display: (isLoading === true) ? 'block' : 'none'
    }

    return (
      <div style={divStyle}>
        <LoadingOverlay>
          <CircleAnimation color={color} />
        </LoadingOverlay>
      </div>
    )
  }
}

export default LoadingAnimation