import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { about1,} from './data'

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-5'>
                About
            </h3>
                <motion.img
                initial={{
                    x: -200,
                    opacity:0
                }}
                whileInView={{
                    x: 0,
                    opacity:1
                }}
                viewport={{once:true}}
                transition={{
                    duration:1.2
                }}
                src="https://lh3.googleusercontent.com/pw/AIL4fc8t6afVzcJe3wbYjTexsI0uLpYsMgxW3kOg2uMrYi0cwXQkW65ywJJXDGe8gzdozR8faleCUPRMX7lzSXJuiVwFfLpLCZ-RBNh_O4aZKR8A4IEKHu0Hlzidco31GQrRT7Gi-Usb_xOKqHwIdcUNvbMC=w1332-h1650-s-no?authuser=0"
                className='-mb-20 md:pd-0 items-center flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[400px] xl:h-[500px] '
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background
                </h4>
                <p className='text-sm'>
                {about1}
                </p>
            </div>
            
            
        </motion.div>
    )
}
export default About