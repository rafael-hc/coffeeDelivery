import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeContextProvider } from './context/CoffeesContext'
import { Router } from './Router'
import { GlobalStyled } from './style/global'
import { defaultTheme } from './style/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeContextProvider>

      <GlobalStyled />
    </ThemeProvider>
  )
}
