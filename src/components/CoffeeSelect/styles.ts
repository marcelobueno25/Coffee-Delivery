import styled from 'styled-components'
import { TitleText } from '../Typography'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  user-select: none;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding-bottom: 2rem;
  column-gap: 0.6rem;
  padding-top: 0.5rem;
`

export const CoffeeImage = styled.img`
  display: flex;
  justify-content: center;
  flex: 1;
  display: inline-block;
  height: 4.5rem;
  width: 4.5rem;
`

export const CardContent = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 0.5rem;
  flex-direction: column;
  width: 100%;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

export const CardButtons = styled.div`
  display: flex;
`

export const Name = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: '400',
})`
  margin-bottom: 0.5rem;
  text-align: start;
`

export const Price = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;

  small {
    margin-right: 0.2rem;
  }
`
