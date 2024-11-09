import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
    };
    const stories = [
        {
            image: '/img/third.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: '/img/second.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: '/img/sixth.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: '/img/seventh.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: '/img/second.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            image: '/img/seventh.png',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        // Add more items as needed
    ];
    return (
        <>
            <div className='py-[119px] bg-black text-white'>
                <div className='container mx-auto'>
                    <h2 className='text-3xl font-semibold mb-8'>Our Stories</h2>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {stories.map((story, index) => (
                            <SwiperSlide key={index}>
                                <div className="mb-6 p-4 rounded-lg">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-60 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-xl font-semibold">{story.title}</h3>
                                    <p className="text-sm mt-2">{story.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="bg-neutral-900 text-white h-screen p-8">
                {/* Newsletter Section */}
                <div className="mb-16">
                    <h2 className="text-xl mb-4">Subscribe to our newsletter</h2>
                    <form onSubmit={handleSubmit} className="flex gap-2 mb-12">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="bg-transparent border-b border-neutral-700 focus:border-white outline-none py-2 flex-grow text-sm w-1/3"
                        />
                        <button
                            type="submit"
                            className="p-2 hover:opacity-80"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </form>
                </div>

                {/* Footer Links */}
                <div className='flex justify-between item-center'>

                    <div className="grid grid-cols-2 gap-[240px] text-sm">
                        <div className="space-y-4">
                            <p>Air X</p>
                            <p>Lexo Z</p>
                            <p>Gravity 9</p>
                        </div>

                        <div className="space-y-4">
                            <p>Fleet</p>
                            <p>Company</p>
                            <p>Stories</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[240px] text-sm">
                        <div className="space-y-4">
                            <p>Purchasing</p>
                            <p>Charging</p>
                            <p>Insurance</p>
                            <p>Service</p>
                        </div>

                        <div className="space-y-4">
                            <p>Specials</p>
                            <p>Investors</p>
                            <p>Career</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
