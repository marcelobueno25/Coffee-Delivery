import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
 from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-gap: 3.5em;

  .introLeft {
    flex: 1;
  }

  .introRight {
    display: flex;
    justify-content: center;
    flex: 1;

    img {
      max-width: 30em;
      width: 100%;
    }
  }

  .bgColorIntro {
    position: absolute;
    width: 100%;
    top: -3em;
    left: 0px;
    z-index: -1;
    height: 100%;
  }

  @media ${(props) => props.theme.device.laptop} {
    flex-direction: column;

    .bgColorIntro {
      display: none;
    }
  }
`

export const ListItems = styled.div`
  display: grid;
  gap: 20px;
  //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 20px 0;

  width: 100%;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`

export const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;

  .iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    border-radius: 50%;
    margin-right: 10px;
    animation: 1s ${fadeIn} alternate ease-in-out forwards;

    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }
`

export const TitleContend = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
`
