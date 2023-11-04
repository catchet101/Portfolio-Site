// note: need to run 'vercel --prod' after pushing to main to get vercel to work
'use client';
import React from 'react';
import LanguagesTable from './components/main/languages-table';
import ToolsTable from './components/main/tools-table';

const sectionTailwind = 'w-full md:w-1/3'

export default function Home() {
    return (
        <main className='px-6 mx-auto text-white/90'>
            <h1 className='mt-16 text-4xl text-center'>
                <span className='whitespace-nowrap'>Hi I&#39;m <span className='font-bold'>Cameron</span></span>, Welcome to My Website
            </h1>
            <div className='flex md:flex-row flex-col mt-16'>
                {/* Languages section */}
                <section className={sectionTailwind}>
                    <LanguagesTable/>
                </section>
                {/* About Me section */}
                <section className={sectionTailwind + ' flex flex-col text-center'}>
                    <h2 className='section-header'>
                        About Me
                    </h2>
                    <p className='md:mx-6'>
                        I&#39;m a 3rd year Computing Science student at SFU seeking my first co-op position. I&#39;m still figuring out what area of Computer Science I
                        want to specialize in so I am open to any experience that will help me learn and grow.
                    </p>
                </section>
                {/* Tools section */}
                <section className={sectionTailwind}>
                    <ToolsTable/>
                </section>
            </div>
        </main>
    )
}
