// Point d’entrée de contact.html : la page Contact est montée séparément.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactPage from './pages/ContactPage.jsx'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(<StrictMode><ContactPage /></StrictMode>)
