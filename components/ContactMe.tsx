import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/20/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {}

export default function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:pandeyrudresh203@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
    return (
        <div className='h-screen items-center flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-5'>
                Contact
            </h3>
            <div className='flex flex-col space-y-5'>
                <h4 className='text-2xl font-semibold text-center pt-20'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#f7ab0a]/50 underline'>Lets Talk.</span>

                </h4>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>+91-7317545634</p>
                    </div>
                    <div className='flex items-center justify-center space-x-5'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>pandeyrudresh203@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>VIT, Chennai</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} className='contactInput' placeholder='Name' type='text' />
                        <input {...register('email')} className='contactInput' placeholder='E-mail' type='text' />
                    </div>
                    <input {...register('subject')} className='contactInput' placeholder='Subject' type='text' />
                    <textarea {...register('message')} className='contactInput' placeholder='Message' />
                    <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg hover:opacity-70 hover:transition-all'>Submit</button>
                </form>
            </div>
        </div>
    )

}