import maleAvatar from '../../assets/male.jpeg'
import femaleAvatar from '../../assets/female.jpeg'
import moment from 'moment'

function User({ user }) {
    return (
        <div>
            <li className='flex justify-between items-center p-3 hover:bg-gray-700 transition-all duration-300'>
                <div className='flex items-center gap-3'>
                    <div className='avatar'>
                        <img src={user.gender === 'male' ? maleAvatar : femaleAvatar} className='scale-125' />
                    </div>
                    <h1 className='semi-title'>{user.name}</h1>
                </div>
                <span className='date'>Katıldığı Saat: {moment(user.date).format('HH:mm')}</span>
            </li>
        </div>
    )
}

export default User