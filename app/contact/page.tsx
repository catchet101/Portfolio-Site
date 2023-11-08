import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import styles from './contact.module.css'
import Link from 'next/link'

function ContactPage() {
  return (
    <main className='main'>
        <h1 className='page-header font-bold'>
            Contact Me
        </h1>
        <section className='flex flex-col mt-8 text-center'>
            <p className='w-full'>Here are some ways to get in touch with me!</p>
            <div className='flex flex-col items-center w-full mt-16'>
              <Link href={'mailto: cal26@sfu.ca'} target='_blank' className={styles.contactLink}><GrMail/>&nbsp;cal26@sfu.ca</Link>
              <Link href={'https://github.com/cameronlee101'} target='_blank' className={styles.contactLink}><FaGithub/>&nbsp;cameronlee101</Link>
              <Link href={'https://www.linkedin.com/in/cameronlee101/'} target='_blank' className={styles.contactLink}><FaLinkedin/>&nbsp;cameronlee101</Link>
            </div>
        </section>
    </main>
  )
}

export default ContactPage