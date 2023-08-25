import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import scrolltoHash from '@/components/ScrollLink'


type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex p-5 items-start justify-between max-w-5xl mx-auto z-20 xl:items-center'>
            <motion.div
            initial ={{
                x:-500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x : 0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
            }}
            className='flex flex-row items-center'>
                {/*Social Icons*/}
                <SocialIcon
                url = "https://www.linkedin.com/in/rudresh-pandey-45b35524b/"
                fgColor='gray'
                bgColor='transparent'
                />
                <SocialIcon
                url = "https://github.com/RudreshPandey203"
                fgColor='gray'
                bgColor='transparent'
                />
                <SocialIcon
                url = "https://leetcode.com/rudreshpandey/"
                fgColor='gray'
                bgColor='transparent'
                />
                <SocialIcon
                url = "https://twitter.com/RudreshPandey_"
                fgColor='gray'
                bgColor='transparent'
                />
                <SocialIcon
                url='https://www.instagram.com/rudreshpandey_/'
                fgColor='gray'
                bgColor='transparent'
                />
            </motion.div>
            <div onClick={() => scrolltoHash('contact')}>
                    <motion.div
            initial ={{
                x:500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x : 0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
                />
                <p className='uppercase text-gray-400 hidden md:inline-flex text-sm'>Get in touch</p>
            </motion.div>
            </div>
            
        </header>
    )
}
