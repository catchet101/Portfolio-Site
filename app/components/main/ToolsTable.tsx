import React from "react";
import ItemBox from "./ItemBox";

const tools = [
    {tool: 'Git', imgPath: '/tools/git.png'},
    {tool: 'Linux', imgPath: '/tools/linux.png'},
    {tool: 'Python Pandas', imgPath: '/tools/pandas.png'},
    {tool: 'Python Scikit Learn', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'},
]

const ToolsTable = () => {
    return (<>
        <h2 className='section-header'>
            Tools
        </h2>
        <div className='flex justify-center text-left flex-wrap'>
            {tools.map(item => 
                <div key={item.tool}>
                    <ItemBox item={item.tool} imgPath={item.imgPath}/>
                </div>
            )}
        </div>
    </>)
}

/*
<a target="_blank" href="https://icons8.com/icon/20906/git">Git</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/17842/linux">Linux</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/xSkewUSqtErH/pandas">Pandas</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
*/

export default ToolsTable