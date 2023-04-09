import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { CoffeeContextProvider } from './contexts'
import { Router } from './router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}
