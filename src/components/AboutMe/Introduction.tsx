"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import Hobbies from './Hobbies';
import { Button } from '../ui/button';
import { ArrowBigRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Introduction() {
  const hobbiesRef = useRef<HTMLElement>(null);

  const scrollToHobbies = () => {
    if (hobbiesRef.current) {
      hobbiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-5'>
      <div className='min-h-screen'>
        <div className='flex flex-row items-center justify-center'>
          <Image 
            src='/Personal/myPhoto.jpeg' 
            alt='My Photo' 
            width={200} 
            height={200} 
            className='w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover rounded-full p-5'
          />
        </div>
        <div className='flex flex-col items-center justify-center max-w-[300px] sm:max-w-[600px] overflow-hidden space-y-4'>
          <p className='text-[15px] sm:text-[20px] text-justify'>
            I am a <b>Software Engineer</b> who thrives on solving complex problems and bringing ideas to life. 
            Whether it`s crafting efficient, user-friendly applications or optimizing systems, 
            I love building solutions from the ground up and continuously learning along the way.
          </p>
          <div>
            <Link href='/Work'>
              <Button className='text-xl p-5 m-5'>
                <ArrowBigRight /> Work Experience
              </Button>
            </Link>
          </div>
          <p className='text-[15px] sm:text-[20px] text-justify'>
            When I`m not coding, I enjoy exploring a variety of hobbies that keep me inspired and energized. 
            These activities not only help me unwind but also fuel my creativity and problem-solving skills in unexpected ways. 
            Below, I`ve shared a bit more about what I love to do in my free time. Click the button below to find out more!
          </p>
            <Button variant="secondary" className=' p-3 m-7' onClick={scrollToHobbies}>
            <ChevronDown className='h-[20px] w-[20px]' /> Scroll to Hobbies
            </Button>
        </div>
      </div>
      <section id='hobbies' ref={hobbiesRef}>
        <Hobbies />
      </section>
    </div>
  );
}
