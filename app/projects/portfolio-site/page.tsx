import React from "react";
import styles from '../projects.module.css'
import { FaGithub } from "react-icons/fa";

export default function PortfolioSite() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Portfolio Site</span>
            </h1>
            <section className='flex flex-col'>
                <div className={`${styles.projectDescBody} h-96`}>
                    <div className={styles.overviewSectionNoPic}>
                        <h2 className='section-header'>
                            Overview
                        </h2>
                        <p className='md:mx-8 leading-8'>
                            Add description here
                        </p>
                    </div>
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