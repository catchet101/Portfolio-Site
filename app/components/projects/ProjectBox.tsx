'use client';
import React from "react";

const ProjectBox = (props: { title: string, description: string, link: string }) => {
    const { title, description, link } = props

    return (
        <figure onClick={() => {window.location.href = link}} className='
        bg-slate-500 
        hover:shadow-projectFigure transition duration-300 ease-in-out translate-y-0 hover:-translate-y-1 hover:cursor-pointer
        rounded-lg mx-5 mt-16 md:mt-0 p-4 
        h-auto w-fit sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <h3 className='font-bold text-xl mb-4'>
                {title}
            </h3>
            <p className='leading-7'>
                {description}
            </p>
        </figure>
    )
}

export default ProjectBox