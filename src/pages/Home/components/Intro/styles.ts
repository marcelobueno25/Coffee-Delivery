import styled from 'styled-components'

type IconsVariant = 'yellow-dark' | 'base-text' | 'yellow' | 'purple'

interface ItemCicle {
  variant: IconsVariant
}

export const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  align-items: center;
  justify-content: space-around;
`
export const BGColor = styled.img`
  position: absolute;
  width: 100%;
  top: -3em;
  left: 0px;
  z-index: -1;
  height: 100%;
`

export const IntroLeft = styled.div`
  max-width: 600px;
`

export const IntroRight = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 500px;
    width: 100%;
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

// eslint-disable-next-line no-redeclare
export const ItemCicle = styled.div<ItemCicle>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
  animation-name: cicle-intro-animation;
  animation-duration: 1s;
  animation-iteration-count: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes cicle-intro-animation {
    from {
      transform: scale(0.5);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  ${(props) => {
    return `background: ${props.theme[props.variant]}`
  }}
`

export const TitleContend = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
`
