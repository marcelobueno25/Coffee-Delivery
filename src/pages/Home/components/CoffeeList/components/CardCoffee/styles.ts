import styled, { keyframes } from 'styled-components'
import { RegularText, TitleText } from '../../../../../../components/Typography'

const rotate = keyframes`
  from {
      transform: rotate(90deg);
    }

    to {
      transform: rotate(0deg);
    }
`

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme.colors['base-card']};
  width: 100%;
  border-radius: 0.5em 1.5em 0.5em 1.5em;
  padding: 1.25rem;
  user-select: none;
  margin: 10px 0;

  @media ${(props) => props.theme.device.laptop} {
    max-width: 100%;
  }
`

export const CoffeeImage = styled.img`
  display: inline-block;
  height: 7rem;
  width: 7rem;
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-iteration-count: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  transform: rotate(90deg);
  margin-top: -3rem;
`

export const Tags = styled.div`
  margin-top: 1rem;
`

export const Tag = styled.small`
  display: inline-block;
  color: ${(props) => props.theme.colors['yellow-dark']};
  background: ${(props) => props.theme.colors['yellow-light']};
  padding: 3px 10px;
  border-radius: 20px;
  margin: 0 5px;
`

export const Name = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: '700',
})`
  margin-bottom: 0.5rem;
`

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-height: 40px;
  width: 100%;
`
export const Price = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;

  small {
    margin-right: 0.2rem;
  }
`

export const CardButtons = styled.div`
  display: flex;
`
