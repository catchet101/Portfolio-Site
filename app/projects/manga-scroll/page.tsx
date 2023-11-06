import React from "react";
import styles from '../projects.module.css'

export default function MangaScrollPage() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Manga Scroll</span>
            </h1>
            <section className='flex flex-col'>
                <div className='flex flex-col md:flex-row justify-center text-center mt-0 md:mt-16'>
                    <div className={styles.overviewSection}>
                        <h2 className='section-header'>
                            Overview
                        </h2>
                        <p className='md:mx-8 leading-8'>
                            This is a manga reading application built in JavaScript using the React Native framework. This is a group project 
                            where we used a Jira scrum board to assign and delegate each members' tasks. <br/>

                        </p>
                    </div>
                    <div className='flex justify-center w-full md:w-1/4 mt-16 md:mt-0'>
                        <img src='/mangaScrollEx.png' alt='Example image of the Card Match Game' className='w-3/6 md:w-4/6'/>
                    </div>
                </div>
                <div>
                    <p className={styles.sourceLink}>
                        Source unavailable
                    </p>
                </div>
            </section>
        </main>
    )
}