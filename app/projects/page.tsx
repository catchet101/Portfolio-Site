import React from 'react'

const projectsPage = () => {
    const figureStyles = {
        width: '25%',
        height: 'auto',
        marginRight: '1%',
        marginLeft: '1%',
        borderRadius: '0.5rem', // rounded-lg
    }
    const figureTailwind = 'bg-slate-500 hover:shadow-projectFigure'

    const projectsRowTailwind = 'flex flex-row justify-center mt-20'

    return (
        <main className='px-6 mx-auto text-white/90'>
            <h1 className='mt-20 text-4xl text-center'>
                <span className='font-bold'>Projects</span>
            </h1>
            <section className='flex flex-col justify-center text-center'>
                <div className={projectsRowTailwind}>
                    <figure className={figureTailwind} style={figureStyles}>
                        Project 1
                    </figure>
                    <figure className={figureTailwind} style={figureStyles}>
                        <h3 className='font-bold'>
                            Card Match Game
                        </h3>
                        <p>
                            Java-based game where the goal is the match all of the pairs of cards on the table in the least amount of guesses
                        </p>
                    </figure>
                    <figure className={figureTailwind} style={figureStyles}>
                        Project 3
                    </figure>
                </div>
                <div className={projectsRowTailwind}>
                <figure className={figureTailwind} style={figureStyles}>
                        Project 4
                    </figure>
                    <figure className={figureTailwind} style={figureStyles}>
                        Project 5
                    </figure>
                    <figure className={figureTailwind} style={figureStyles}>
                        Project 6
                    </figure>
                </div>
            </section>
        </main>
    )
}

export default projectsPage