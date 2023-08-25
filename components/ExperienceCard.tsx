import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden lg:ml-[500px] md:ml-[200px]'>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://imgs.search.brave.com/SvhcQOqUV4oSH0-MMg47UqQrZFJ76bnl7CLeMdxcwQE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9qc29u/LmNvbW11ZGxlLmNv/bS9yYWlscy9hY3Rp/dmVfc3RvcmFnZS9y/ZXByZXNlbnRhdGlv/bnMvZXlKZmNtRnBi/SE1pT25zaWJXVnpj/MkZuWlNJNklrSkJh/SEJCYVc5Uklpd2la/WGh3SWpwdWRXeHNM/Q0p3ZFhJaU9pSmli/RzlpWDJsa0luMTkt/LWJkNWYyYTQ2MWJj/NjI5MGVmNDQ1MDA1/YjE4YmFmMWZlZmJj/NzAzY2QvZXlKZmNt/RnBiSE1pT25zaWJX/VnpjMkZuWlNJNklr/SkJhRGRDYW05Vlky/MVdlbUZZY0d4WU0x/SjJXREo0Y0dKWGJE/QlhkMlJ3UVd3MFFt/RlJTbVZCVVQwOUlp/d2laWGh3SWpwdWRX/eHNMQ0p3ZFhJaU9p/SjJZWEpwWVhScGIy/NGlmWDA9LS1jZTQ1/ZmFkZmMyYWY0MzNm/MDllMDhkODllMWJj/MWQzZjFlYWMzYjVl/L091ciUyMGxvZ28u/anBn'/>
        <div className='px-0 md:px-10 pl-3'>
            <h4 className='text-4xl font-light '>Web Developer in HackClub</h4>
            <p className='font-bold text-2xl mt-1 '>HackClub</p>
            <div className='flex space-x-2 my-2'>
            <img className='h-10 w-15 '
                src='https://imgs.search.brave.com/N1hgWKHudLbcpp0RBaetQ76JGZu8Djm_02jt8OagdHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc.svg'
                />
                <img className='h-10 w-15 '
                src='https://imgs.search.brave.com/ACPGUrtTTXx7SJXsFN_RsE5hF4uTHq2ORXFfEU0RiX0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/NC8yMy8xNy80MS9q/YXZhc2NyaXB0LTcz/NjQwMF8xMjgwLnBu/Zw'
                />
                <img className='h-10 w-15 '
                src='https://imgs.search.brave.com/zjCOJVhK5K9z4lUN_jcgA-7rZ6s8blL7K_1NAXq4p3Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjQwZWNlZjEw/MTRjMGI1ZTQ4OGEu/cG5n'
                />
                <img className='h-10 w-15 '
                src='https://imgs.search.brave.com/F76k1XhX58wyrQFqZ2KzrTozh5CKBqVaomacyZJovKU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MzBmNWNlZjEw/MTRjMGI1ZTRhYTEu/cG5n'
                />
                <img className='h-10 w-15'
                src='https://imgs.search.brave.com/21yTT_m8HFrbU4qjmx9o1DGM9bX1MG-WpAAMji1tFso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3Zjk4MWNlZjEw/MTRjMGI1ZTQ4YmUu/cG5n'
                />
            </div>
            <div>
                {/* tech used */}
            </div>
            <p>Started - March,2023</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>

            </ul>
        </div>
    </article>

    
    
  )
}