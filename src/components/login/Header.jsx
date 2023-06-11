import { BsChatDotsFill } from 'react-icons/bs'

function Header() {
    return (
        <header className='pt-7 pb-16'>
            <div className='absolute h-56 top-0 left-0 right-0 bg-primary -z-10' />
            <div className='flex items-center gap-3 pl-8 md:pl-0'>
                <div className='bg-zinc-50 rounded-full p-2'>
                    <BsChatDotsFill className='text-secondary text-2xl' />
                </div>
                <h1 className='title'> {import.meta.env.VITE_BRAND_NAME} </h1>
            </div>
        </header>
    )
}

export default Header