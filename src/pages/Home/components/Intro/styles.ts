import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin: 5rem 0;
  align-items: center;
  justify-content: space-around;
`

export const IntroLeft = styled.div`
  max-width: 600px;
`

export const IntroRight = styled.div`
  display: flex;
  justify-content: center;
  max-width: 400px;

  img {
    //height: 00px;
    width: 500px;
  }
`

export const ListItems = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 20px 0;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
`

export const ItemCicle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${(props) => props.theme['base-title']};
  margin-right: 10px;
`

export const TitleContend = styled.div`
  display: flex;
  flex-direction: column;
`
