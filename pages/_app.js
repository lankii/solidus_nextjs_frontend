import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { useApollo } from '../lib/apolloClient'

export const theme = {
  colors: {
    primary: '#3C76f0',
    accent: '#0070f3',
    white: '#ffffff'
  }
}

export default function App ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
