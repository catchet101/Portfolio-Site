import React from "react";
import styles from '../projects.module.css'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image';

export default function CardMatchGame() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Card Match Game</span>
            </h1>
            <section className='center-all'>
                <div className={styles.overviewSection}>
                    <h2 className='section-header'>
                        Overview
                    </h2>
                    <p className={styles.overviewDescription}>
                        This is a Java based 2D card matching game where the objective is to patch all the pairs of cards in the least number of attempts.
                        You get to choose the number of cards on the board. If you want a challenge, put in the maximum amount of cards! <br/><br/>
                        This project utilizes the Java Swing library to create the Graphical User Interface and is structured using the Maven project framework.
                        My goal for this project was to develop my Object Oriented Programming skills while learning how to use the Java Swing library.
                    </p>
                </div>
                <div className='flex justify-center w-full mt-16'>
                    <Image src={'/gifs/CardMatchGameGif.gif'} alt={'Card Match Game example gif'} className='w-80'/>
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