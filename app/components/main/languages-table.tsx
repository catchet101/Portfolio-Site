import React from "react";
import ProficiencyBar from "./proficiency-bar";

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

export default function LanguagesTable() {
    return (<>
        <h2 className='section-header'>
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
    </>)
}