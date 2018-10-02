import styled, { keyframes } from 'styled-components'

const circleSpin = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`

const CircleAnimation = styled.div`
  border: 7px solid #f3f3f3;
  border-radius: 50%;
  border-top: 7px solid ${props => (!props.color ? '#6699ff' : props.color)};
  width: 100px;
  height: 100px;
  -webkit-animation: ${circleSpin} 1.2s linear infinite; 
  animation: ${circleSpin} 1.2s linear infinite;
  margin: 0 auto;
  position: relative;
  top: 250px;
  `

export default CircleAnimation
