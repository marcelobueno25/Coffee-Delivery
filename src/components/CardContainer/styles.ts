import styled from 'styled-components'

interface CardContainerProps {
  size?: string
}

export const CardContainer = styled.div<CardContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme.colors['base-card']};
  width: 100%;
  border-radius: 0.5em 1.5em 0.5em 1.5em;
  padding: 7% 5%;
  user-select: none;
  margin: 10px 0;
  ${({ size }) => `max-width: ${size || '100%'}`}
`
