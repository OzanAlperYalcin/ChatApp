import avatarMale from '../../assets/male.jpeg'
import avatarFemale from '../../assets/female.jpeg'
import Svg from '../Svg'
import RoomName from './RoomName'
import { useState } from 'react'
import { FiLogOut } from 'react-icons/fi'

function Header({ data, setData, room, count, socket }) {
    const [status, setStatus] = useState(false)

    const handleLogout = async () => {
        await socket.disconnect()
        setData('')
    }

    return (
        <>
            {status && <RoomName status={status} setStatus={setStatus} data={{ name: room.name, roomId: data.room }} />}
            <header className='grid grid-cols-6 h-16 bg-third overflow-hidden'>
                <aside className='aside'>
                    <div className='h-full flex justify-between items-center px-5'>
                        <div className='flex items-center gap-3'>
                            <div className='avatar'>
                                <img src={data.gender === 'male' ? avatarMale : avatarFemale} className='scale-125' />
                            </div>
                            <h1 className='semi-title'>{data.name}</h1>
                        </div>
                        <div className='font-medium text-white text-xs bg-primary rounded-xl px-2 py-1 border border-zinc-700'>
                            <h1 className='flex gap-2.5 items-center justify-between'>Aktif Kişi: {count} <span className='block h-3 w-3 rounded-full bg-secondary border border-white' /></h1>
                            <p>Oda Şifresi: {data.room}</p>
                        </div>
                        <button
                            onClick={() => handleLogout()}
                            className='btn-icon' title='Çıkış Yap!'
                        >
                            <FiLogOut size={20} className='text-gray-500' />
                        </button>
                    </div>
                </aside>
                <div className='col-span-6 md:col-span-4'>
                    <div className='h-full flex justify-between items-center px-5'>
                        <div className='flex items-center gap-3'>
                            <button className='btn-icon'
                                disabled={!data.admin} title='Oda Adını Değiştir'
                                onClick={() => setStatus(true)}
                            >
                                <Svg icon='setting' />
                            </button>
                            <div className='flex items-center gap-2.5'>
                                <h1 className='semi-title'>{room.name}</h1>
                                {data.admin && <span className='bg-primary px-1.5 py-0.5 rounded-xl text-white text-[10px]'>YÖNETİCİ</span>}
                            </div>
                        </div>
                        <button className='btn-icon' title='Ara'>
                            <Svg icon='search' />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header