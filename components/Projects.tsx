import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-4'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/200 scrollbar-thumb-[#f7ab0a]'>
                {projects.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen '>
                        <motion.img
                        initial={{y:-300,
                        opacity:0,
                        }}
                        transition={{duration:1.2}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        className='md:w-[400px] w-[250px] pt-8'
                            src='https://imgs.search.brave.com/fM01amGyyIq932a6-VKuh4pFslfcx1GmfzvI_eP5zxc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwZHVwZS5jb20v/aW1nL25ldGZsaXgt/Y2xvbmUvd2VsY29t/ZS1pbWcud2VicA'
                            alt=''
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl font-semibold text-center'><span className='underline decoration-[#f7aboa]/50'>
                                Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                                Netflix clone
                            </h4>
                            <p className='text-sm text-center md:text-left'>
                                Netflix app that has a Log In and Log Out Authentication with Google. It has beautiful Home Screen with all the movies looking jsut like Netflix. There is also a subscription page where you can see your active monthly subscription. We also use Stripe Payments for the monthly Netflix Subscription!
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}