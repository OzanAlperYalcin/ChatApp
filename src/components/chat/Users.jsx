import Svg from '../Svg'
import User from './User'

function Users({ users }) {

  return (
    <aside className='aside bg-forth'>
      {users.length === 0 || !users ?
        <div className="h-[calc(100%-4rem)] flex flex-shrink-0 flex-col gap-2.5 items-center justify-center">
          <Svg icon='connection' className="hidden lg:block" />
          <p className='text-white font-semibold text-sm'>Kullanıcı Bekleniyor..</p>
        </div>
        :
        <ul className='flex flex-col px-10 py-2.5 overflow-auto divide-y divide-gray-700 h-[calc(100vh-72px)]'>
          {users.map((user, i) => (
            <User key={i} user={user} />
          ))}
        </ul>
      }
    </aside>
  )
}

export default Users