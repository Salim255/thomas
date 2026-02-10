import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root');
createRoot(root!).render(
  // StrictMod enables extra development-only checks that help you find bugs early.
  <StrictMode>
    <App />
  </StrictMode>,
)
