import React from "react";
import styles from '../projects.module.css'
import Image from 'next/image';

export default function MangaScrollPage() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Manga Scroll</span>
            </h1>
            <section className='center-all'>
                <div className={styles.overviewSection}>
                    <h2 className='section-header'>
                        Overview
                    </h2>
                    <p className={styles.overviewDescription}>
                        Built using the React Native framework in JavaScript, this manga reading application is a collaborative, non-academic group project. 
                        We utilized a Jira scrum board to assign and delegate tasks to each team member. <br/><br/>
                        The goal for me when participating in this group project was to gain experience working with React Native along with all the technologies
                        and processes associated with it.
                    </p>
                </div>
                <div className='flex justify-center w-full mt-16'>
                    <Image src={'/gifs/MangaScrollGif.gif'} alt={'Manga Scroll example gif'} className='w-64'/>
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