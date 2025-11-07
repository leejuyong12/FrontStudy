import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppPure from './AppPure.jsx'
import App from './AppTodo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
