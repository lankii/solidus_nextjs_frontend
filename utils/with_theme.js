import { ThemeProvider } from 'styled-components'
import { theme } from '../pages/_app'

const withTheme = (children) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default withTheme
