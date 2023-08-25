import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import scrolltoHash from '@/components/ScrollLink'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, Its Rudresh Pandey",
            "Guy-who-loves-Pizza.tsx",
            "<ButLoveToCodeMore/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div id='hero' className='pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://github.com/RudreshPandey203/cc/blob/main/rudresh2.png?raw=truealt=" />
            <div className='z-20'>
                <h2 className='text-lg uppercase text-gray-400 pb-2 tracking-[15px]'>
                    WEB DEVELOPER
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10 pb-8'>
                    <span>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>
                <div className='pd-5 inline'>
                    <button onClick={() => scrolltoHash('about')} className='heroButton'>About
                    </button>
                    <button onClick={() => scrolltoHash('experience')} className='heroButton'>Experience
                    </button>
                    <button onClick={() => scrolltoHash('skills')} className='heroButton'>Skills
                    </button>
                    <button onClick={() => scrolltoHash('projects')} className='heroButton'>Projects
                    </button>
                </div>
            </div>

        </div>


    )
}