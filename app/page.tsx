"use client";
import React from "react";
import ProficiencyBar from "./components/proficiency-bar";

const allBarsColor:string = "#3535bd"
const languageProficiencies = [
    {language: "C", barColor: allBarsColor, percentage: 50},
    {language: "C++", barColor: allBarsColor, percentage: 50},
    {language: "Java", barColor: allBarsColor, percentage: 60},
    {language: "Python", barColor: allBarsColor, percentage: 40},
    {language: "SQL Server", barColor: allBarsColor, percentage: 30},
    {language: "Haskell", barColor: allBarsColor, percentage: 20},
    {language: "HTML", barColor: allBarsColor, percentage: 40},
    {language: "CSS", barColor: allBarsColor, percentage: 30},
    {language: "Javascript", barColor: allBarsColor, percentage: 30},
    {language: "Typescript", barColor: allBarsColor, percentage: 30},
    {language: "C#", barColor: allBarsColor, percentage: 30},
]
languageProficiencies.sort((item1, item2) => {
    return item2.percentage - item1.percentage
})

export default function Home() {
    return (
        <main className="px-6 mx-auto text-white/90">
            <h1 className="mt-20 text-4xl text-center">
                <span className="whitespace-nowrap">Hi I&#39;m <span className="font-bold">Cameron</span></span>, Welcome to My Website
            </h1>
            <div className="flex sm:flex-row flex-col">

                <section className="flex flex-col text-center sm:w-1/2 mt-20">
                    <h2 className="font-bold text-2xl mb-4">
                        About Me
                    </h2>
                    <p className="sm:mx-12 lg:mx-24">
                        I&#39;m a 3rd year Computing Science student at SFU seeking my first co-op position. I&#39;m still figuring out what area of Computer Science I
                        want to specialize in so I am open to any experience that will help me learn and grow.
                    </p>
                </section>

                <section className="sm:w-1/2 mt-20">
                    <h2 className="font-bold text-2xl mb-4 text-center">
                        Languages
                    </h2>
                    <div className="flex justify-center text-center">
                        <table className="border-spacing-1 border-separate">
                            <thead>
                                <tr>
                                    <th className="px-8">Language</th>
                                    <th className="px-8">Proficiency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {languageProficiencies.map(item => 
                                    <tr key={item.language}>
                                        <td>
                                            {item.language}
                                        </td>
                                        <td className="px-2">
                                            {<ProficiencyBar barColor={item.barColor} percentage={item.percentage}/>}
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
