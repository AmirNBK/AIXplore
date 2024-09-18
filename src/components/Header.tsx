import React from 'react';
import logo from '@/assets/icons/logo.svg'
import Image from 'next/image';
import localFont from 'next/font/local'
const WorkSans = localFont({ src: '../assets/fonts/WorkSans-SemiBold.ttf' })
const WorkSansMedium = localFont({ src: '../assets/fonts/WorkSans-Medium.ttf' })


const Header = () => {
    const headerItems = ['Home', 'AI Tools', 'About', 'Contact']
    return (
        <div className={`Header flex flex-row w-full justify-between items-center mt-6`}>
            <Image src={logo} alt='logo' className='size-12' />

            <div className={`${WorkSans.className} flex flex-row gap-12 text-[#161C2D] translate-x-6`}>
                {headerItems.map((item, index) => {
                    return (
                        <p key={index}>
                            {item}
                        </p>
                    )
                })}
            </div>

            <button className={`${WorkSansMedium.className} bg-[#473BF0] py-2 px-4 rounded-lg text-white`}>
                Get started free
            </button>
        </div>
    );
};

export default Header;