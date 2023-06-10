import { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

function ChatContextProvider({ children }) {
    const [data, setData] = useState('')
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    const [room, setRoom] = useState({})
    const [count, setCount] = useState('')

    const values = {
        data,
        setData,
        messages,
        setMessages,
        users,
        setUsers,
        room,
        setRoom,
        count,
        setCount
    }

    return (
        <ChatContext.Provider value={values}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChatContext = () => {
    const context = useContext(ChatContext)
    return context
}

export default ChatContextProvider