import React from 'react'

const projectsPage = () => {
    return (
        <main className="px-6 mx-auto text-white/90">
            <h1 className="mt-20 text-4xl text-center">
                <span className="font-bold">Projects</span>
            </h1>
            <section className="mt-12 flex justify-center text-center">
                <table className="border-separate border-spacing-x-80 border-spacing-y-12">
                    <tbody>
                        <tr>
                            <td>
                                project1
                            </td>
                            <td>
                                project2
                            </td>
                            <td>
                                project3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                project4
                            </td>
                            <td>
                                project5
                            </td>
                            <td>
                                project6
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default projectsPage