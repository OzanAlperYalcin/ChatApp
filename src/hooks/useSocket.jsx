import { io } from 'socket.io-client'
import { useChatContext } from '../components/context/ChatContext'
import { useEffect, useRef } from 'react'

function useSocket() {

  const { data, setData, setRoom, setMessages, setUsers, setCount } = useChatContext()
  const socketRef = useRef(null)
  
  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_SOCKET, {
      reconnectionDelayMax: 10000
    })

    if (socketRef.current) {
      const socket = socketRef.current
      
      if (data) {
        socket.emit('login', data)
      }

      socket.on('users', (usersData) => {
        const { users, count, room } = usersData
        const filteredUsers = users.filter(user => user.name !== data.name)
        const user = users.find(user => user.date === data.date)
        setData(user)
        setUsers(filteredUsers)
        setCount(count)
        setRoom(room)
      })
      
      socket.on('signout', (usersData) => {
        const { users, count } = usersData
        const filteredUsers = users.filter(user => user.name !== data.name)
        const user = users.find(user => user.date === data.date)
        setData(user)
        setUsers(filteredUsers)
        setCount(count)
      })
      
      socket.on('message', (message) => {
        if (data.name !== message.name) {
          setMessages(prev => [...prev, message])
        }
      })
      socket.on('updateRoom', (room) => {
        setRoom(room)
      })
    
      socket.on('disconnect', (reason) => {
        if (reason === "io server disconnect") {
          socket.connect();
        }
      })
    }
  }, [])
  
  return socketRef.current
}

export default useSocket