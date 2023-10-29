"use client";
import React from "react";
import ProficiencyBar from "./components/proficiency-bar";

const languageProficiencies = [
    {language: "C", bgcolor: "6a1b9a", percentage: 50},
    {language: "C++", bgcolor: "6a1b9a", percentage: 40},
]
languageProficiencies.sort((item1, item2) => {
    return item2.percentage - item1.percentage
})

// may need to run 'vercel --prod' to get vercel to work
export default function Home() {
    return (
        <main className="px-6 mx-auto text-white/90">
            <h1 className="mt-20 text-4xl text-center ">
                <span className="whitespace-nowrap">I&#39;m <span className="font-bold">Cameron</span></span>, Welcome to My Website
            </h1>
            <div className="flex sm:flex-row flex-col">
                <section className="flex flex-col justify-center text-center sm:w-1/2 mt-20">
                    <h2 className="font-bold text-2xl mb-4">
                        About Me
                    </h2>
                    <p className="sm:mx-12 lg:mx-24">
                        I&#39;m a 3rd year Computing Science student at SFU seeking my first co-op position. 
                    </p>
                </section>
                <section className="sm:w-1/2 mt-20">
                    <h2 className="font-bold text-2xl mb-4 text-center">
                        Languages
                    </h2>
                    <p className="flex justify-center text-center">
                        <table>
                            <thead>
                                <tr>
                                    <th className="px-4">Language</th>
                                    <th className="px-4">Proficiency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {languageProficiencies.map(item => <>
                                    <tr>
                                        <td>
                                            {item.language}
                                        </td>
                                        <td>
                                            {<ProficiencyBar bgcolor={item.bgcolor} percentage={item.percentage}/>}
                                        </td>
                                    </tr>
                                </>)}
                            </tbody>
                        </table>
                    </p>
                </section>
            </div>
        </main>
    )
}
