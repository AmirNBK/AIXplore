import React from 'react';
import localFont from 'next/font/local'
const WorkSansBold = localFont({ src: '../assets/fonts/WorkSans-Bold.ttf' })
const WorkSansRegular = localFont({ src: '../assets/fonts/WorkSans-Regular.ttf' })
const WorkSansMedium = localFont({ src: '../assets/fonts/WorkSans-Medium.ttf' })
import arrow from '@/assets/icons/tail-right.svg'
import Image from 'next/image';



const HeroSection = () => {
    return (
        <div className='HeroSection flex flex-col items-center text-center mt-20 gap-8'>
            <h1 className={`${WorkSansBold.className} text-5xl w-1/2`}>
                Unlock the Power of AI Innovation
            </h1>
            <p className={`${WorkSansRegular.className} w-1/3 text-lg`}>
                Explore a suite of groundbreaking tools designed to elevate your creativity, productivity, and more.
            </p>

            <div className='flex flex-row items-center gap-14 justify-center w-1/3'>
                <button className={`${WorkSansMedium.className} bg-[#473BF0] py-4 px-5 rounded-lg text-white flex flex-row items-center gap-4`}>
                    <p>
                        Get started for free
                    </p>
                    <Image src={arrow} alt='arrow' />
                </button>
                <p className={`${WorkSansBold.className}`}>
                    Learn more
                </p>
            </div>
        </div>
    );
};

export default HeroSection;