'use client'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(0)

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

    if (windowWidth < 640) {
        return (
            <nav className='bg-slate-600 sticky p-4 top-0 drop-shadow-xl z-10'>
                <input className={styles.sideMenu} type='checkbox' id='sideMenu'/>
                <label className={styles.hamb} htmlFor='sideMenu'><span className={styles.hambLine}></span></label>
                <ul className={styles.menu}>
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