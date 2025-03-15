
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router';
 
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  
)
