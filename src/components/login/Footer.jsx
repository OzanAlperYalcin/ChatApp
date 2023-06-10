import { FaHeart } from 'react-icons/fa'

function Footer() {
    return (
        <div className="mt-auto">
            <div className="h-10 bg-primary flex justify-between items-center px-5 text-xs font-semibold">
                <div className='flex items-center gap-1 bg-zinc-50 py-0.5 px-2 rounded-lg'>
                    <p>Made with</p>
                    <FaHeart className='text-red-500' />
                </div>
            </div>
        </div>
    )
}

export default Footer