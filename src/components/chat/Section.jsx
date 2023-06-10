import Messages from './Messages'
import Users from './Users'

function Section({ data, messages, setMessages, users, socket }) {

    return (
        <section className='h-[calc(100%-4rem)] grid grid-cols-6'>
            <Users users={users} />
            <Messages data={data} messages={messages} setMessages={setMessages} socket={socket} />
        </section>
    )
}

export default Section