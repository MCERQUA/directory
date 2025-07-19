import { createRoot } from 'react-dom/client'
import './assets/scss/style.scss'
import '../node_modules/animate.css/animate.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
