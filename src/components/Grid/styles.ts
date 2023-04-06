import styled from 'styled-components'

type Variant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface ColumnProps {
  desktop: Variant
  mobile?: Variant
  tablet?: Variant
}

export const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
`

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;

  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`

const getWidthGrid = (value: number) => {
  if (!value) return
  const width = (value / 12) * 100
  return `width: ${width}%`
}

export const Column = styled.div<ColumnProps>`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`
