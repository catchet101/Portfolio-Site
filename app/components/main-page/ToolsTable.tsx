import React from "react";
import ItemBox from "./ItemBox";

const tools = [
    {tool: 'Git', imgPath: '/tools/git.png'},
    {tool: 'Linux', imgPath: '/tools/linux.png'},
    {tool: 'React', imgPath: '/tools/react.png'},
    {tool: 'Angular', imgPath: '/tools/angular.png'},
    {tool: 'Python Pandas', imgPath: '/tools/pandas.png'},
    {tool: 'Python Scikit Learn', imgPath: '/tools/scikit_learn.svg'},
    {tool: 'Hadoop', imgPath: '/tools/hadoop.png'},
    {tool: 'Apache Spark', imgPath: '/tools/spark.png'}
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
<a target="_blank" href="https://icons8.com/icon/123603/react-native">React Native</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/71257/angularjs">angular</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/xSkewUSqtErH/pandas">Pandas</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/69132/hadoop-distributed-file-system">Hadoop Distributed File System</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
*/

export default ToolsTable