import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/next"
import {theme } from './theme/theme.ts'
import '@jenkinsci/jenkins-io-components';
import { CssBaseline, ThemeProvider } from '@mui/material'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
	<CssBaseline/>
	<Analytics />
    <App />
  </ThemeProvider>
  </BrowserRouter>,
)
