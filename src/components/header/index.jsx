import React from 'react'

export default function Header() {
    return (
        <>
            {/* navbar section  */}
            <div className="py-6 bg-gray-800 text-white w-full">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                        {/* Left Navigation */}
                        <nav>
                            <ul className="flex flex-col md:flex-row gap-4 md:gap-7 text-center">
                                <li>Air X</li>
                                <li>Lexo Z</li>
                                <li>Gravity 9</li>
                            </ul>
                        </nav>

                        {/* Center Title */}
                        <div className="font-mono text-xl md:text-2xl mt-4 md:mt-0 px-4 md:px-[235px]">
                            <span className="text-yellow-400">Hyper</span>Dash
                        </div>

                        {/* Right Navigation */}
                        <nav>
                            <ul className="flex flex-col md:flex-row gap-4 md:gap-7 text-center">
                                <li>Shop</li>
                                <li>Account</li>
                                <li>☰</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div>
                <img className="w-full h-[70vh] md:h-screen object-cover" src="/img/hero.jpg" alt="hero" />
            </div>



        </>
    )
}
