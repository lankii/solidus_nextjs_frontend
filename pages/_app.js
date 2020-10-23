import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'

import { useApollo } from '../lib/apolloClient'
import { theme } from '../theme'
import GlobalStyle from '../theme/globalStyle'

import { Footer } from '../containers'

export default function App ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  )
}
