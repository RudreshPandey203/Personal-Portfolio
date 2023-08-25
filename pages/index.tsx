import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import scrolltoHash from '@/components/ScrollLink'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y  snap-mandatory w-screen overflow-y-scroll overflow-x-scroll-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>
      <Head>
        <title>Rudresh's Portfolio</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />

      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section className='snap-center' id='experience'>
        <WorkExperience />
      </section>


      {/*Skills*/}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/*Projects*/}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/*Contact Me*/}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <div onClick={() => scrolltoHash('hero')}>
        <footer className='fixed bottom-5 w-full cursor-pointer'>
          <div className='flex pl-5'>
            <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' 
            src='https://github.com/RudreshPandey203/cc/blob/main/rudresh2.png?raw=truealt='
            alt=''
            />
          </div>
        </footer>
      </div>
    </div>
  )
}