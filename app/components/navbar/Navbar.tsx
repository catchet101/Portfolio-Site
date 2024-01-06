'use client'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'
import HamburgerButton from './HamburgerButton'

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(0)
    const [navbarExpanded, setNavbarExpanded] = useState(false)

    // Keeps track of window width, used to conditionally render the navbar
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
  
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    const expandNavbar = () => {
        setNavbarExpanded(!navbarExpanded)
    }

    if (windowWidth < 640) {
        return (
            <nav className='bg-slate-600 top-0 h-16 sticky drop-shadow-xl z-10'>
                <HamburgerButton onClick={expandNavbar}/>
                <ul className={`${styles.menu} ${navbarExpanded ? styles.expanded : ''}`}>
                    <li><Link href='/' className={styles.navbarLink}>Cameron Lee</Link></li>
                    <li><Link href='/projects' className={styles.navbarLink}>Projects</Link></li>
                    <li><Link href='https://github.com/cameronlee101' target='_blank' className={styles.navbarLink}>GitHub&nbsp;<FaGithub/></Link></li>
                    <li><Link href='/contact' target='' className={styles.navbarLink}>Contact Me</Link></li>
                </ul>
            </nav>
        )
    }
    else {
        return (
            <nav className='bg-slate-600 sticky p-4 top-0 drop-shadow-xl z-10'>
                <div className='mx-auto flex justify-between flex-col sm:flex-row max-w-3xl'>              
                    <Link href='/' className={styles.navbarLink}>Cameron Lee</Link>
                    <Link href='/projects' className={styles.navbarLink}>Projects</Link>
                    <Link href='https://github.com/cameronlee101' target='_blank' className={styles.navbarLink}>GitHub&nbsp;<FaGithub/></Link>
                    <Link href='/contact' target='' className={styles.navbarLink}>Contact Me</Link>                
                </div>
            </nav>
        )
    }
}

export default Navbar