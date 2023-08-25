import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  directionLeft?:boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity:0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        src='https://imgs.search.brave.com/ACPGUrtTTXx7SJXsFN_RsE5hF4uTHq2ORXFfEU0RiX0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/NC8yMy8xNy80MS9q/YXZhc2NyaXB0LTcz/NjQwMF8xMjgwLnBu/Zw'
        className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>60%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill