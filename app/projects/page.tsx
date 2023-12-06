import React from 'react'
import ProjectBox from '../components/projects/ProjectBox'

export default function ProjectsPage() {
    const projectsRowTailwind = 'flex flex-col sm:flex-row justify-center text-center mt-0 md:mt-16'

    return (
        <main className='main'>
            <h1 className='page-header font-bold'>
                Projects
            </h1>
            <section className='flex flex-col'>
                <p className='flex justify-center text-center mt-4'>
                    Below are some of the projects I&#39;ve worked on. Click on them to learn more!
                </p>
                <div className={projectsRowTailwind}>
                    <ProjectBox
                        title='Manga Scroll (WIP)'
                        description='React Native JavaScript app that you can use to search up and read all of your favourite manga.'
                        link='/projects/manga-scroll'
                    />
                    <ProjectBox
                        title='Card Match Game'
                        description='Java-based game where the goal is to match all of the pairs of cards on the table in the least amount of attempts.'
                        link='/projects/card-match-game'
                    />
                    <ProjectBox
                        title='CMPT 272 Angular Site'
                        description='Angular-based website used to help a group of superheroes by allowing citizens to report villain activity'
                        link='/projects/cmpt272-angular-site'
                    />
                </div>
                <div className={projectsRowTailwind}>
                    <ProjectBox
                        title='Portfolio Site (WIP)'
                        description='This portfolio website to show my (hopeful) future employers and anyone else who wants to see my work. Built in TypeScript using the Next.js React framework'
                        link='/projects/portfolio-site'
                    />
                    <ProjectBox
                        title='Fall Hacks 2023'
                        description='12 Hours to build a project based on the prompt: "Turning over a new leaf". Created a text-based adventure game narrated by AI using OpenAI&#39;s API'
                        link='/projects/fall-hacks-2023'
                    />
                </div>
            </section>
        </main>
    )
}