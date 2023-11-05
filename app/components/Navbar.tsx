import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
            <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row max-w-3xl'>
                <Link href='/' className='navbar-link'>Cameron Lee</Link>
                <Link href='/projects' className='navbar-link'>Projects</Link>
                <Link href='https://github.com/catchet101' className='navbar-link flex flex-row items-center'>GitHub&nbsp;<FaGithub/></Link>
                <Link href='/' className='navbar-link'>Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar