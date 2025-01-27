import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// The exclamation mark after document.getElementById('root') is a non-null assertion operator.  
// It tells the TypeScript compiler that the expression will never be null or undefined.  
// This is because the document.getElementById() method returns an Element object, which is never null or undefined.