import React from "react";

interface ProjectBoxProps {
    title: string;
    description: string;
    link: string;
}

export default function ProjectBox(props: ProjectBoxProps) {
    return (
        <figure className='bg-slate-500 hover:shadow-projectFigure transition duration-300 ease-in-out rounded-lg mx-5 h-auto w-1/4 p-4'>
            <h3 className='font-bold text-xl mb-4'>
                {props.title}
            </h3>
            <p>
                {props.description}
            </p>
        </figure>
    )
}