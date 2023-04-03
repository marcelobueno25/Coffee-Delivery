import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const List = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
  column-gap: 20px;
  flex-wrap: wrap;
  justify-items: center;
`
