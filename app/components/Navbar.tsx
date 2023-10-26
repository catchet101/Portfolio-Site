import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row max-w-3xl">
                <Link href="/" className="text-white/80 no-underline hover:text-white">Cameron Lee</Link>
                <Link href="/" className="text-white/80 no-underline hover:text-white">Projects</Link>
                <Link href="https://github.com/catchet101" className="text-white/80 no-underline hover:text-white mr-2 flex flex-row items-center">GitHub&nbsp;<FaGithub/></Link>
                <Link href="/" className="text-white/80 no-underline hover:text-white">Contact Me</Link>
            </div>
        </nav>
    )
}