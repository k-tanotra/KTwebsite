"use client"
import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
export default function Contact() {
     const { theme } = useTheme();
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
        <div className='text-center mt-10 p-5 max-w-[600px]'>
        <h1 className='text-4xl font-bold mb-5'>Get in Touch</h1>
        <p className='text-lg mb-10'>
          I would love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out through any of the platforms below.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center mt-5 mb-5 space-x-[80px]">
        <div className='flex flex-row items-center justify-center space-x-5'>
          <a href={"https://github.com/k-tanotra"} className='text-black hover:text-gray-500 transition duration-300'>
            <Github className={`text-2xl h-[40px] w-[40px] ${theme === 'dark' ? 'invert' : ''}`} />
          </a>
          <a href={"https://www.linkedin.com/in/kanishktanotra/"} className='text-blue-600 hover:text-blue-900 transition duration-300'>
            <Linkedin className={`text-2xl h-[40px] w-[40px]`} />
          </a>
          <a href={"https://x.com/kanishktanotra"} className='text-black hover:text-gray-500 transition duration-300'>
            <Twitter className={`text-2xl h-[40px] w-[40px] ${theme === 'dark' ? 'invert' : ''}`} />
          </a>
        </div>
      </div>
      <div className='text-center mt-10'>
        <div className='text-lg flex flex-row items-center justify-center p-5'>
          Alternatively, you can send me an email directly at  
          <a href={"mailto:ktanotra@asu.edu"} className='text-black hover:text-gray-500 transition duration-300 p-1'>
          <Mail className={`text-2xl h-[40px] w-[40px] ${theme === 'dark' ? 'invert' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  )
}
