import React from "react";
import styles from '../projects.module.css'
import { FaGithub } from "react-icons/fa";

export default function FallHacks2023() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Fall Hacks 2023</span>
            </h1>
            <section className='center-all'>
                <div className={styles.overviewSection}>
                    <h2 className='section-header'>
                        Overview
                    </h2>
                    <p className={styles.overviewDescription}>
                        To fit the theme of this hackathon, we decided to build a text-based adventure web application where you play
                        as a person who is tired of the tedius every day 9-5 grind and wants to experience something new.
                        They are suddenly transported to another world where they adventure and fight various enemies.
                    </p>
                </div>
                <div className='flex justify-center w-full mt-16'>
                    <img src='/gifs/FallHacks2023Gif.gif' alt='Fall Hacks 2023 example gif' className='websiteGif'/>
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