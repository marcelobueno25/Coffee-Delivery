import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme['base-card']};
  width: 250px;
  border-radius: 0.5em 1.5em 0.5em 1.5em;
  padding: 7% 5%;
  user-select: none;
  margin: 10px 0;
`
