import React from "react";
import styles from '../projects.module.css'
import { FaGithub } from "react-icons/fa";

export default function FallHacks2023() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Fall Hacks 2023</span>
            </h1>
            <section className='flex flex-col'>
                <div className={styles.projectDescBody}>
                    <div className={styles.overviewSection}>
                        <h2 className='section-header'>
                            Overview
                        </h2>
                        <p className='md:mx-8 leading-8'>
                            Description
                        </p>
                    </div>
                    <div className='flex justify-center w-full md:w-1/4 mt-16 md:mt-0'>
                        <img src='/FallHacks2023Gif.gif' alt='Card Match Game example gif' className='w-4/6 md:w-full'/>
                    </div>
                </div>
                <div>
                    <a href='https://github.com/cameronlee101/fall-hacks-2023' className={styles.sourceLink}>
                        Source&nbsp;<FaGithub/>
                    </a>
                </div>
            </section>
        </main>
    )
}