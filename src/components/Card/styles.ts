import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
      transform: translateY(-50px) rotate(90deg);
    }

    to {
      transform: translateY(-50px) rotate(0deg);
    }
`

export const CardImgCoffee = styled.img`
  display: inline-block;
  height: 7rem;
  width: 7rem;
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-iteration-count: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  transform: translateY(-50px) rotate(90deg);
`

export const CardTexts = styled.div`
  transform: translateY(-20px);
`

export const Tag = styled.small`
  display: inline-block;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  padding: 3px 10px;
  border-radius: 20px;
  margin: 3px;
  margin-bottom: 20px;
`

export const Description = styled.small`
  color: ${(props) => props.theme['base-label']};
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-height: 40px;
  width: 100%;
`
export const CardPrice = styled.p`
  strong {
    margin-left: 5px;
    font-size: 1.2rem;
  }
`

export const CardButtons = styled.div`
  display: flex;
`
