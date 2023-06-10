import Message from "./Message"
import Svg from "../Svg"
import { useState } from 'react'

function Messages({ data, messages, setMessages, socket }) {

  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = {name: data.name, message: value, room: data.room, date: new Date().getTime()}
    setMessages(prev => [...prev, message])
    socket.emit('chat', message)
    setValue('')
  }

  return (
    <div className='grid col-span-6 md:col-span-4'>
      <div className="mt-auto">
        <div className="flex flex-col justify-end gap-2 h-[calc(100vh-136px)] py-2 px-14 overflow-auto">
          {messages.map((message, i) => (
            <Message key={i} username={data.name} message={message} />
          ))}
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className='bg-third flex items-center gap-4 p-3'>
          <button type="button">
            <Svg icon='emoji' className='text-gray-500 hover:text-gray-400 transition-all' />
          </button>
          <input
            type="text" value={value}
            onChange={(e) => setValue(e.target.value)}
            className='h-10 bg-[#2A3942] rounded-lg outline-none text-white placeholder:text-gray-500 placeholder:px-2 px-3 w-full'
            placeholder='Bir mesaj yazın'
          />
          <button type="submit" disabled={value.length <= 0}>
            <Svg icon='send' className='text-gray-500 hover:text-gray-400 transition-all' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Messages