import React from "react";
import styles from '../projects.module.css'
import { FaGithub } from 'react-icons/fa'

export default function CardMatchGame() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Card Match Game</span>
            </h1>
            <section className='flex flex-col'>
                <div className={styles.projectDescBody}>
                    <div className={styles.overviewSection}>
                        <h2 className='section-header'>
                            Overview
                        </h2>
                        <p className='md:mx-8 leading-8'>
                            This is a Java based 2D card matching game where the objective is to patch all the pairs of cards in the least number of attempts.
                            You get to choose the number of cards on the board. If you want a challenge, put in the maximum amount of cards! <br/>
                            This project utilizes the Java Swing library to create the Graphical User Interface and is structured using the Maven project framework.
                            My goal for this project was to develop my Object Oriented Programming skills while learning how to use the Java Swing library. <br/> 
                        </p>
                    </div>
                    <div className='flex justify-center w-full md:w-1/4 mt-16 md:mt-0'>
                        <img src='/cardMatchGameEx.png' alt='Example image of the Card Match Game' className='w-4/6 md:w-full'/>
                    </div>
                </div>
                <div>
                    <a href='https://github.com/catchet101/Card-Match-Game' className={styles.sourceLink}>
                        Source&nbsp;<FaGithub/>
                    </a>
                </div>
            </section>
        </main>
    )
}