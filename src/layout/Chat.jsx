import Header from '../components/chat/Header'
import Section from '../components/chat/Section'
import { useChatContext } from '../components/context/ChatContext'
import useSocket from '../hooks/useSocket'

function Chat() {
  const { data, setData, users, room, messages, setMessages, count } = useChatContext()
  const socket = useSocket()

  return (
    <div className='h-screen border-4 border-primary bg-repeat bg-zinc-900 relative z-0'>
      <div className='absolute inset-0 bg-chat opacity-10 -z-10' />
      <Header data={data} setData={setData} room={room} count={count} socket={socket} />
      <Section data={data} users={users} messages={messages} setMessages={setMessages} socket={socket} />
    </div>
  )
}

export default Chat