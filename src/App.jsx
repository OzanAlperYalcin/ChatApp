import Login from './layout/Login'
import Chat from './layout/Chat'
import { useChatContext } from './components/context/ChatContext'
import './index.css'


function App() {
  
  const { data } = useChatContext()

  return (
    !data ?
      <Login />
      :
      <Chat />
  )
}

export default App
