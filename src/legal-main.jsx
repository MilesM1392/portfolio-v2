// Point d’entrée de mentions-legales.html.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LegalPage from './pages/LegalPage.jsx'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LegalPage />
  </StrictMode>,
)
