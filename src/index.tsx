import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error("Root element not found. Ensure there's an element with ID 'root' in your HTML.")
}
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
