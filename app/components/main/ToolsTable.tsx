import React from "react";

const tools = [
    {tool: 'Git', img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', link: 'https://git-scm.com/'},
    {tool: 'Linux', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', link: 'https://www.linux.org/'},
    {tool: 'Python Pandas', img: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg', link: 'https://pandas.pydata.org/'},
    {tool: 'Python Scikit Learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', link: 'https://scikit-learn.org/'},
]

const ToolsTable = () => {
    return (<>
        <h2 className='section-header'>
            Other Tools
        </h2>
        <div className='flex justify-center text-center'>
            <table className='border-spacing-2 border-separate'>
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
    </>)
}

export default ToolsTable