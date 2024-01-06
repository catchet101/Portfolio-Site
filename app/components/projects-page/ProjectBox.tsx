'use client';
import React, { useEffect, useState } from "react";
import styles from './ProjectBox.module.css'

const ProjectBox = (props: { title: string, description: string, link: string, delay:number }) => {
    const { title, description, link, delay } = props

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay]);

    return (
        <figure 
            onClick={() => {window.location.href = link}} 
            className={`${styles.projectBox} ${isVisible ? styles.visible : ''}`}
        >
            <h3 className='font-bold text-xl mb-4 text-center'>
                {title}
            </h3>
            <p className='leading-7 text-center'>
                {description}
            </p>
        </figure>
    )
}

export default ProjectBox