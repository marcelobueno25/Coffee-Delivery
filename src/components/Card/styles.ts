import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme['base-card']};
  width: 250px;
  border-radius: 5px 30px 5px 30px;
  padding: 10px;

  img {
    display: inline-block;
    transform: translateY(-30px);
    height: 8rem;
    width: 8rem;
  }
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
`

export const Description = styled.small`
  color: ${(props) => props.theme['base-label']};
`
