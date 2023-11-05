import React from "react";

const ProjectBox = (props: { title: string, description: string, link: string }) => {
    const { title, description, link } = props

    console.log(link)

    return (
        <figure className='bg-slate-500 hover:shadow-projectFigure transition duration-300 ease-in-out rounded-lg mx-5 h-auto w-fit sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mt-16 md:mt-0'>
            <a href={link}>
                <h3 className='font-bold text-xl mb-4'>
                    {title}
                </h3>
                <p className='leading-7' dangerouslySetInnerHTML={{ __html: description }}/>
            </a>
        </figure>
    )
}

export default ProjectBox