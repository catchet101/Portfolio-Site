import React from "react";
import styles from '../projects.module.css'
import { FaGithub } from "react-icons/fa";

export default function PortfolioSite() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Portfolio Site</span>
            </h1>
            <section className='center-all'>
                <div className={styles.overviewSection}>
                    <h2 className='section-header'>
                        Overview
                    </h2>
                    <p className={styles.overviewDescription}>                        
                        I wanted to create a place where I had space to show off my current and future projects, while also learning more about web development.
                        This website was built in Typescript using the Next.js React Framework and was deployed on Vercel.
                    </p>              
                </div>
                <div className='align-bottom'>
                    <a href='https://github.com/catchet101/Portfolio-Site' className={styles.sourceLink}>
                        Source&nbsp;<FaGithub/>
                    </a>
                </div>
            </section>
        </main>
    )
}