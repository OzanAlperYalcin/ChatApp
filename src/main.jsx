import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ChatContextProvider from './components/context/ChatContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChatContextProvider>
    <App />
  </ChatContextProvider>
)
