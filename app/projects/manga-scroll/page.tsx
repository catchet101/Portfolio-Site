import React from "react";
import styles from '../projects.module.css'

export default function MangaScrollPage() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Manga Scroll</span>
            </h1>
            <section className='flex flex-col'>
                <div className={styles.projectDescBody}>
                    <div className={styles.overviewSection}>
                        <h2 className='section-header'>
                            Overview
                        </h2>
                        <p className='md:mx-8 leading-8'>
                            Built using the React Native framework in JavaScript, this manga reading application is a collaborative, non-academic group project. 
                            We utilized a Jira scrum board to assign and delegate tasks to each team member. <br/>
                            The goal for me when participating in this group project was to gain experience working with React Native along with all the technologies
                            and processes associated with it.
                        </p>
                    </div>
                    <div className='flex justify-center w-full md:w-1/4 mt-16 md:mt-0'>
                        <img src='/MangaScrollGif.gif' alt='Example image of the Card Match Game' className='w-3/6 md:w-4/6'/>
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