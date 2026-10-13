import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

/* Fonts are self-hosted: no request to Google before consent, and no third-party
   connection on the critical path. Fraunces uses its optical-size axis. */
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './index.css'

/* Pages are prerendered to static HTML at build time for crawlers and link
   previews. The client renders fresh over that markup rather than hydrating,
   because several pages read the browser (reduced motion, crypto) on first render. */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
