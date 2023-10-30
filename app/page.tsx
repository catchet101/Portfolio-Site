'use client';
import React from 'react';
import ProficiencyBar from './components/proficiency-bar';

// General section variables
const sectionTailwind = 'w-full md:w-1/3 mt-20 '
const sectionHeaderTailwind = 'font-bold text-2xl mb-4 text-center '

// Language section variables
const allBarsColor:string = '#3535bd'
const languageProficiencies = [
    {language: 'C', barColor: allBarsColor, percentage: 50},
    {language: 'C++', barColor: allBarsColor, percentage: 50},
    {language: 'Java', barColor: allBarsColor, percentage: 60},
    {language: 'Python', barColor: allBarsColor, percentage: 40},
    {language: 'SQL Server', barColor: allBarsColor, percentage: 30},
    {language: 'Haskell', barColor: allBarsColor, percentage: 20},
    {language: 'HTML', barColor: allBarsColor, percentage: 40},
    {language: 'CSS', barColor: allBarsColor, percentage: 30},
    {language: 'Javascript', barColor: allBarsColor, percentage: 30},
    {language: 'Typescript', barColor: allBarsColor, percentage: 30},
    {language: 'C#', barColor: allBarsColor, percentage: 30},
]
languageProficiencies.sort((item1, item2) => {
    return item2.percentage - item1.percentage
})

// Tools section variables
const tools = [
    {tool: 'Git', img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', link: 'https://git-scm.com/'},
    {tool: 'Linux', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', link: 'https://www.linux.org/'},
    {tool: 'Python Pandas', img: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg', link: 'https://pandas.pydata.org/'},
    {tool: 'Python Scikit Learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', link: 'https://scikit-learn.org/'},
]

export default function Home() {
    return (
        <main className='px-6 mx-auto text-white/90'>
            <h1 className='mt-20 text-4xl text-center'>
                <span className='whitespace-nowrap'>Hi I&#39;m <span className='font-bold'>Cameron</span></span>, Welcome to My Website
            </h1>
            <div className='flex md:flex-row flex-col'>
                {/* About Me section */}
                <section className={sectionTailwind + 'flex flex-col text-center'}>
                    <h2 className={sectionHeaderTailwind}>
                        About Me
                    </h2>
                    <p className='md:mx-6'>
                        I&#39;m a 3rd year Computing Science student at SFU seeking my first co-op position. I&#39;m still figuring out what area of Computer Science I
                        want to specialize in so I am open to any experience that will help me learn and grow.
                    </p>
                </section>
                {/* Languages section */}
                <section className={sectionTailwind}>
                    <h2 className={sectionHeaderTailwind}>
                        Languages
                    </h2>
                    <div className='flex justify-center text-center'>
                        <table className='border-spacing-1 border-separate'>
                            <thead>
                                <tr>
                                    <th className='px-8'>Language</th>
                                    <th className='px-8'>Proficiency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {languageProficiencies.map(item => 
                                    <tr key={item.language}>
                                        <td>
                                            {item.language}
                                        </td>
                                        <td className='px-2'>
                                            {<ProficiencyBar barColor={item.barColor} percentage={item.percentage}/>}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
                {/* Tools section */}
                <section className={sectionTailwind}>
                    <h2 className={sectionHeaderTailwind}>
                        Other Tools
                    </h2>
                    <div className='flex justify-center text-center'>
                        <table className='border-spacing-1 border-separate'>
                            <tbody>
                                {tools.map(item => 
                                    <tr key={item.tool}>
                                        <td>
                                            {item.tool}
                                        </td>
                                        <td className='px-2'>
                                            <a href={item.link} target='_blank' rel='noreferrer'><img src={item.img} alt={item.tool} width={30} height={30}></img></a>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </main>
    )
}
