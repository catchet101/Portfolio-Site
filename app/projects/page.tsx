import React from 'react'
import ProjectBox from '../components/projects/ProjectBox'

export default function ProjectsPage() {
    const projectsRowTailwind = 'flex flex-col sm:flex-row justify-center text-center mt-0 md:mt-16'

    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Projects</span>
            </h1>
            <section className='flex flex-col justify-center text-center'>
                <div className={projectsRowTailwind}>
                    <ProjectBox
                        title='Manga Scroll'
                        description='React Native JavaScript app that you can use to search up and read all of your favourite manga.'
                        link='/projects/manga-scroll'
                    />
                    <ProjectBox
                        title='Card Match Game'
                        description='Java-based game where the goal is to match all of the pairs of cards on the table in the least amount of attempts.'
                        link='/projects/card-match-game'
                    />
                </div>
                <div className={projectsRowTailwind}>
                    <ProjectBox
                        title='Fall Hacks 2023'
                        description='12 Hours to build a project based on the prompt: "Turning over a new leaf". <br> Created a text-based adventure game narrated by AI using OpenAI&#39;s API'
                        link='/projects/fall-hacks-2023'
                    />
                </div>
            </section>
        </main>
    )
}