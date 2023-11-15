import React from "react";
import ItemBox from "./ItemBox";

const languages = [
    { language: 'C', imgPath: '/language/c.png' },
    { language: 'C++', imgPath: '/language/cpp.png' },
    { language: 'Java', imgPath: '/language/java.png' },
    { language: 'Python', imgPath: '/language/python.png' },
    { language: 'SQL Server', imgPath: '/language/mssql.png' },
    { language: 'HTML', imgPath: '/language/html.png' },
    { language: 'CSS', imgPath: '/language/css.png' },
    { language: 'Javascript', imgPath: '/language/js.png' },
    { language: 'Typescript', imgPath: '/language/ts.png' },
    { language: 'C#', imgPath: '/language/csharp.png' },
]

const LanguagesTable = () => {
    return (<>
        <h2 className='section-header'>
            Languages
        </h2>
        <div className='flex justify-center text-left flex-wrap'>
            {languages.map(item => 
                <div key={item.language}>
                    <ItemBox item={item.language} imgPath={item.imgPath}/>
                </div>
            )}
        </div>
    </>)
}
/*
languages
<a target="_blank" href="https://icons8.com/icon/40670/c-programming">C Programming</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/40669/c%2B%2B">C++</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/13679/java">Java</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/13441/python">Python</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/laYYF3dV0Iew/microsoft-sql-server">Microsoft SQL Server</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/20909/html-5">HTML</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/21278/css3">CSS</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/108784/javascript">JavaScript</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/uJM6fQYqDaZK/typescript">TypeScript</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
<a target="_blank" href="https://icons8.com/icon/55251/c-sharp-logo">C</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
 */
export default LanguagesTable