import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ScoreInfo from './Context/Score.tsx'

createRoot(document.getElementById('root')!).render(
  <ScoreInfo>
    <StrictMode>
      <App />
    </StrictMode>,
  </ScoreInfo>
)
