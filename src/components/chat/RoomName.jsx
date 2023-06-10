import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
function RoomName({ status, setStatus, data }) {

  const [name, setName] = useState(data.name)

  const socket = io(import.meta.env.VITE_SOCKET, {
    reconnectionDelayMax: 10000
  })

  useEffect(() => {
    return () => {
      socket.disconnect()
    }
  }, [socket])

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('room', { name, roomId: data.roomId })
    setStatus(false)
  }
  
  const handleClick = () => {
    setName(data.name)
    setStatus(false)
  }

  return (
    status &&
    <div
      className='fixed inset-0 bg-black/60 flex justify-center items-center z-50'
      onClick={() => handleClick()}
    >
      <div className='w-2/5 bg-forth rounded-lg' onClick={(e) => e.stopPropagation()}>
        <header className='p-5 text-center font-semibold text-md text-gray-300'>
          Oda Ayarları
        </header>
        <div className='p-10 px-20 pt-0'>
          <form onSubmit={(e) => handleSubmit(e)} className='grid gap-2'>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="login-input"
              value={name}
            />
            <button type='submit' disabled={name.length === 0} className='btn-secondary'>
              Oda Adını Değiştir
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RoomName