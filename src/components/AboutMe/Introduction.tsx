import React from 'react'
import Image from 'next/image'
import Hobbies from './Hobbies'

export default function Introduction() {
  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-5'>
      <div className='flex flex-row items-center justify-center'>
        <Image 
          src="/Personal/myPhoto.jpeg" 
          alt="My Photo" 
          width={200} 
          height={200} 
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover rounded-full p-5"
        />
      </div>
      <div className="max-w-[300px] sm:max-w-[600px] overflow-hidden">
        <p className='text-[15px] sm:text-[20px] text-justify'>
          I am a <b> Software Engineer </b> who thrives on solving complex problems and bringing ideas to life. 
          Whether it`s crafting efficient, user-friendly applications or optimizing systems, 
          I love building solutions from the ground up and continuously learning along the way.
        </p>
      </div>
      <Hobbies/>
    </div>
  )
}
