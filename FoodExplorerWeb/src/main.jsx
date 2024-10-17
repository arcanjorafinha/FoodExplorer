import React from 'react'
import ReactDOM from 'react-dom/client'


import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart.jsx';

import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
