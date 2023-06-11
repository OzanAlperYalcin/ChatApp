import Svg from "../Svg"
import moment from "moment"

function Message({ username, message }) {
    return (
        <div className={`flex ${username === message.name ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-2 p-2 rounded-md relative ${username === message.name ? 'bg-[#176b5b] rounded-tr-none' : 'bg-third rounded-tl-none'}`}>
                <div>
                    {username !== message.name && <p className="text-orange-500 text-xs font-semibold">{message.name}</p>}
                    <p className='text-white font-medium text-sm pb-1'>{message.message}</p>
                </div>
                <span className="date">{moment(message.date).format('HH:mm')}</span>
                <Svg className={`absolute top-0 ${username === message.name ? 'text-[#176b5b] -right-2' : 'text-third -left-2'}`} icon={username === message.name ? 'right' : 'left'} />
            </div>
        </div>
    )
}

export default Message