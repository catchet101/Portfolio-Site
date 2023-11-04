import React from 'react'
import ProjectBox from '../components/projects/project-box'

export default function projectsPage() {
    const projectsRowTailwind = 'flex flex-row justify-center mt-16'

    return (
        <main className='px-6 mx-auto text-white/90'>
            <h1 className='mt-16 text-4xl text-center'>
                <span className='font-bold'>Projects</span>
            </h1>
            <section className='flex flex-col justify-center text-center'>
                <div className={projectsRowTailwind}>
                    <ProjectBox
                        title='Project 1'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        link='/'
                    />
                    <ProjectBox
                        title='Card Match Game'
                        description='Java-based game where the goal is the match all of the pairs of cards on the table in the least amount of guesses.'
                        link='/'
                    />
                    <ProjectBox
                        title='Project 3'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        link='/'
                    />
                </div>
                <div className={projectsRowTailwind}>
                    <ProjectBox
                        title='Project 4'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        link='/'
                    />
                    <ProjectBox
                        title='Project 5'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        link='/'
                    />
                    <ProjectBox
                        title='Project 6'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        link='/'
                    />
                </div>
            </section>
        </main>
    )
}