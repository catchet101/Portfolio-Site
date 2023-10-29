"use client";

// may need to run 'vercel --prod' to get vercel to work
export default function Home() {
    return (
        <main className="px-6 mx-auto">
            <h1 className="my-12 text-4xl text-center text-white/90">
                <span className="whitespace-nowrap">I&#39;m <span className="font-bold">Cameron</span></span>, Welcome to My Website
            </h1>
            <section className="flex flex-col justify-center text-center text-white/90">
                <p className="font-bold text-2xl mb-4">
                    About Me
                </p>
                <p className="sm:mx-40 lg:mx-64">
                    I&#39;m a 3rd year Computing Science student at SFU. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
            
        </main>
    )
}
