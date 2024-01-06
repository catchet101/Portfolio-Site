// note: may need to run 'vercel --prod' after pushing to main to get vercel to work
import React from 'react';
import LanguagesTable from './components/main-page/LanguagesTable';
import ToolsTable from './components/main-page/ToolsTable';
import styles from './app.module.css'

export default function Home() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='whitespace-nowrap'>Hi I&#39;m <span className='font-bold'>Cameron</span></span>, Welcome to My Website
            </h1>
            <section className='flex flex-col mt-0 items-center'>
                {/* About Me section */}
                <section className={styles.sectionHalves + ' flex flex-col text-center'}>
                    <h2 className='section-header'>
                        About Me
                    </h2>
                    <p className='lg:mx-6 leading-8'>
                        I&#39;m a 3rd year Computing Science student at SFU seeking my first co-op position. I&#39;m still figuring out what area of Computer Science 
                        I want to specialize in so I am open to any experience that will help me learn and grow.<br/>
                    </p>
                </section>
                {/* Languages section */}
                <section className={styles.sectionHalves}>
                    <LanguagesTable/>
                </section>
                {/* Tools section */}
                <section className={styles.sectionHalves}>
                    <ToolsTable/>
                </section>
            </section>
        </main>
    )
}
