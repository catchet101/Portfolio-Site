import React from "react";

export default function CardMatchGame() {
    return (
        <main className='main'>
            <h1 className='page-header'>
                <span className='font-bold'>Card Match Game</span>
            </h1>
            <section className='flex flex-col text-center'>
                <div className='flex flex-col md:flex-row justify-center text-center mt-0 md:mt-16'>
                    <div className='overview-section'>
                        <h2 className='section-header'>
                            Overview
                        </h2>
                        <p className='md:mx-8 leading-8'>
                            This is a Java based 2D card matching game where the objective is to patch all the pairs of cards in the least number of attempts. <br/>
                            You get to choose the number of cards on the board. If you want a challenge, put in the maximum amount of cards! <br/>
                            
                        </p>
                    </div>
                    <div className='flex justify-center w-full md:w-1/4 mt-16 md:mt-0'>
                        <img src='/cardMatchGameEx.png' alt='Example image of the Card Match Game' className='w-4/6 md:w-full'/>
                    </div>
                </div>
                <div>
                    
                </div>
            </section>
        </main>
    )
}