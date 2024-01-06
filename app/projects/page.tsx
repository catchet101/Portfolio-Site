import React from 'react'
import ProjectBox from '../components/projects-page/ProjectBox'
import styles from './projects.module.css'

export default function ProjectsPage() {
    const fadeInInterval = 800

    const projects = [
        {
            title: 'Genki Study Tool',
            description: 'Website featuring various activities to help study the material in the Genki Japanese textbooks.',
            link: '/projects/genki-study-tool',  
        },
        {
            title: 'Card Match Game',
            description: 'Java-based game where the goal is to match all of the pairs of cards on the table in the least amount of attempts.',
            link: '/projects/card-match-game',
        },
        {
            title: 'CMPT 272 Angular Site',
            description: 'Angular-based website used to help a group of superheroes by allowing citizens to report villain activity',
            link: '/projects/cmpt272-angular-site',
        },
        {
            title: 'Manga Scroll',
            description: 'React Native JavaScript app that you can use to search up and read all of your favourite manga.',
            link: '/projects/manga-scroll',  
        },
        {
            title: 'Portfolio Site',
            description: 'This portfolio website to show my (hopeful) future employers and anyone else who wants to see my work. Built in TypeScript using the Next.js React framework',
            link: '/projects/portfolio-site',
        },
        {
            title: 'Fall Hacks 2023',
            description: '12 Hours to build a project based on the prompt: "Turning over a new leaf". Created a text-based adventure game narrated by AI using Open\'s API',
            link: '/projects/fall-hacks-2023',
        },
    ]

    return (
        <main className='main'>
            <h1 className='page-header font-bold'>
                Projects
            </h1>
            <section className='flex flex-col'>
                <p className='flex justify-center text-center mt-4'>
                    Below are some of the projects I&#39;ve worked on. Click on them to learn more!
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-12 gap-x-4 lg:gap-x-10 mx-6 lg:mx-20 mt-8 justify-center align-top'>
                    {projects.map((item, index) => 
                        <div className='h-auto w-fit' key={item.title}>
                            <ProjectBox title={item.title} description={item.description} link={item.link} delay={index * fadeInInterval}></ProjectBox>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}