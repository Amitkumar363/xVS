import React from 'react'

export default function Main() {
    return (
        <>
            {/* second image section  */}
            <div className='py-[117px] bg-black'>
                <div className='container mx-auto'>
                    <div className='px-[173px] relative text-white'>
                        <img src='/img/second.png' alt='hero2' />
                        <div className='absolute text-6xl -top-8 left-52'>
                            <h2>Air X</h2>
                        </div>
                        <h4 className='text-2xl pl-4'>Accelerate into a New Era</h4>
                    </div>

                </div>

            </div>
            {/* thrid image section  */}
            <div className="flex items-center  bg-black text-white">
                {/* Left Section */}
                <div className="w-full space-y-4 pb-12 pl-[140px]">
                    <h2 className="text-5xl font-semibold">Lexo Z</h2>
                    <p className="text-3xl mb-4 font-serif">Accelerate into a New Era</p>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-md py-[47.5px] flex flex-col gap-1">
                        <span className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span><br />
                        <span className='text-lg'>Lexo Z is a new vision, quick, bold acceleration under smooth control at all stages.</span><br />
                        <span className='text-lg'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</span>
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <button className="px-6 py-2 bg-white text-gray-900 font-semibold">Order Now</button>
                        <button className="px-6 py-2 bg-transparent border border-white font-semibold">Learn More</button>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="w-full">
                    <img src="/img/third.png" alt="Lexo Z" className="w-screen h-screen object-cover" />
                </div>
            </div>

            {/* fourth image section  */}
            <div className=' relative'>
                <img src='/img/hero.jpg' alt='fourth' className='w-full h-screen bg-cover' />
                <div className="flex flex-col items-start p-8 text-white text-left max-w-md absolute top-32 left-24">
                    <h1 className="text-4xl font-bold ">Air X</h1>
                    <h2 className="text-2xl font-semibold mt-2">Accelerate into a New Era</h2>
                    <p className=" mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <button className="px-6 py-2  text-white font-medium hover:bg-gray-800">
                            Order Now
                        </button>
                        <button className="px-6 py-2 bg-transparent  font-medium hover:text-gray-700">
                            Learn More
                        </button>
                    </div>
                </div>

            </div>

            {/* fifth part  */}
            <div className='py-[115px] bg-gray-900'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center  '>
                        <div className=''>
                            <img src='/img/third.png' alt='logo' className='h-screen' />
                        </div>
                        <div>
                            <div className=" text-white p-6 max-w-lg mx-auto">
                                <h2 className="text-lg font-semibold mb-6">Model Air X Specifications</h2>
                                <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                                    {/* Left Column */}
                                    <div>
                                        <p className="text-gray-400">Range (EPA est.)</p>
                                        <p>Up to 300 miles</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Acceleration</p>
                                        <p>4.5s 0-60 mph</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Peak Power</p>
                                        <p>400 hp</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Wheels</p>
                                        <p>19" or 20"</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Towing</p>
                                        <p>2000 pounds</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Seating</p>
                                        <p>Up to 5</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-400">Drag Coefficient</p>
                                        <p>0.28 cd</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Top Speed</p>
                                        <p>130 mph</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-[105px] pl-[80px]'>
                                <img src='/img/fourth.png' alt='logo' />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* sixth part */}
            <div className='py-[173px] bg-black'>

                <div className='container mx-auto'>

                    <div className="grid grid-cols-4 gap-8 text-center text-white">

                        {/* Max Power */}
                        <div className='flex flex-col gap-4'>
                            <p className="text-sm text-gray-400 mb-1">Max Power</p>
                            <p className="text-4xl font-semibold">1200+</p>
                            <p className="text-lg">hp</p>
                        </div>

                        {/* EPA Range */}
                        <div className='flex flex-col gap-4'>
                            <p className="text-sm text-gray-400 mb-1">EPA estimated range up to</p>
                            <p className="text-4xl font-semibold">516</p>
                            <p className="text-lg">mi</p>
                        </div>

                        {/* Charging Time */}
                        <div className='flex flex-col gap-4'>
                            <p className="text-sm text-gray-400 mb-1">minutes to charge 200 miles</p>
                            <p className="text-4xl font-semibold">12</p>
                            <p className="text-lg">mins</p>
                        </div>

                        {/* Acceleration */}
                        <div className='flex flex-col gap-4'>
                            <p className="text-sm text-gray-400 mb-1">0-60 mph</p>
                            <p className="text-4xl font-semibold">&lt;2</p>
                            <p className="text-lg">sec</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* seventh part */}
            <div className='bg-black'>
                <div className='container mx-auto'>
                    <div className=" text-white py-8 px-4 max-w-6xl mx-auto">

                        {/* Top Row: Three Images with Captions */}
                        <div className="grid grid-cols-3 gap-8 mb-8">

                            {/* Impeccable Design */}
                            <div className="text-center">
                                <img src="/img/sixth.png" alt="Impeccable Design" className="w-full h-48 object-cover" />
                                <p className="mt-4 text-lg font-medium">Impeccable Design</p>
                            </div>

                            {/* Elevated Performance */}
                            <div className="text-center">
                                <img src="/img/hero.jpg" alt="Elevated Performance" className="w-full h-48 object-cover" />
                                <p className="mt-4 text-lg font-medium">Elevated Performance</p>
                            </div>

                            {/* Great Interiors */}
                            <div className="text-center">
                                <img src="/img/third.png" alt="Great Interiors" className="w-full h-48 object-cover" />
                                <p className="mt-4 text-lg font-medium">Great Interiors</p>
                            </div>
                        </div>

                        {/* Bottom Row: Large Image with Caption and Description */}
                        <div className="grid grid-cols-2 gap-28 items-center">

                            {/* Large Image */}
                            <div className='pt-[77px]'>
                                <img src="/img/seventh.png" alt="Drive to a sustainable future" className="w-full  object-cover" />
                            </div>

                            {/* Text Content */}
                            <div>
                                <img src='/img/sixth.png' alt='logo' />
                                <h2 className="text-2xl font-semibold mb-4">Drive to a sustainable future</h2>
                                <p className="text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* eighth part */}
            <div className='py-[109px] bg-black'>
                <div className='container mx-auto'>

                    <div className="flex px-[85px] mx-auto gap-[134px]">
                        <div className="grid grid-cols-2 gap-4 max-w-lg">
                            {/* First image */}
                            <img src='/img/sixth.png' alt='logo' />

                            {/* Second image */}
                            <img src='/img/seventh.png' alt='logo' />

                            {/* Third image */}
                            <img src='/img/third.png' alt='third' />

                            {/* fourth image  */}
                            <img src='/img/second.png' alt='second' />
                        </div>
                        <div>
                            <img src='/img/third.png' alt='third' className='h-screen' />
                        </div>
                    </div>

                </div>
            </div>
            {/* ninth part */}

            <div className=' relative ' >
                {/* Background image */}
                <div>
                    <img src='/img/hero.jpg' alt='second' className='w-full h-screen object-cover' />
                </div>

                {/* Overlay text and buttons */}
                <div className='absolute bottom-36 left-24 text-white'>
                    <h1 className='text-4xl font-semibold'>Air X</h1>
                    <p className='text-xl mt-2'>Accelerate into a New Era</p>

                    <div className='flex space-x-4 mt-6'>
                        <button className='px-6 py-2 bg-white text-black rounded-md'>Order Now</button>
                        <button className='px-6 py-2 bg-transparent border border-white text-white rounded-md'>Learn More</button>
                    </div>
                </div>
            </div>




        </>
    )
}
