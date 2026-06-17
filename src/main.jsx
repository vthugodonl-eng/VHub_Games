import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import TagManager from 'react-gtm-module'

TagManager.initialize({
  gtmId: "GTM-PT4MZJGM"
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
