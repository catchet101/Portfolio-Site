import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
            <div className='mx-auto flex justify-between flex-col sm:flex-row max-w-3xl'>
                <Link href='/' className={styles.navbarLink}>Cameron Lee</Link>
                <Link href='/projects' className={styles.navbarLink}>Projects</Link>
                <Link href='https://github.com/cameronlee101' target='_blank' className={styles.navbarLink + ' flex flex-row items-center'}>GitHub&nbsp;<FaGithub/></Link>
                <Link href='/contact' className={styles.navbarLink}>Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar