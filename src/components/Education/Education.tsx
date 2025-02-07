"use client"
import Image from "next/image";
import { GraduationCap } from 'lucide-react';
import {
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowBigRight} from 'lucide-react';
import Link from 'next/link';
export default function EducationTimeline() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className='flex flex-rows justify-center items-center space-x-5 sm:text-[40px] text-[30px] font-bold pb-10'> 
        <GraduationCap className='h-[40px] w-[40px]'/> 
        <h1>Education</h1> 
      </div>
    <div className="flex flex-col items-center justify-center space-y-5">
      <Card className="p-3 hover:scale-110 transition-all duration-300 min-w-[300px] sm:w-[500px] w-[300px]">
      <div className="flex flex-row space-x-4 text-sm md:text-lg">
        <Image
          src="/Personal/ASU.png"
          alt="ASU"
          width={80}
          height={80}
          className=" p-2 h-[70px] w-[80px] object-cover"
        />
        <div>
          <div className='font-semibold sm:text-[20px] text-[15px]'>Arizona State University</div>
          <div className='sm:text-[15px] text-[12px]'>
            Masters in Data Science Analytics and Engineering
          </div>
          <div className='italic sm:text-[12px] text-[10px]'>Jan 2024 - May 2025</div>
        </div>
      </div>
      </Card>
      <Card className="p-3 hover:scale-110 transition-all duration-300 min-w-[300px] sm:w-[500px] w-[300px]">
      <div className="flex flex-row space-x-4 text-sm md:text-lg">
        <Image
          src="/Personal/ASU.png"
          alt="ASU"
          width={80}
          height={10}
          className=" p-2 h-[70px] w-[80px] object-cover"
        />
        <div>
          <div className='font-semibold sm:text-[20px] text-[15px]'>Arizona State University</div>
          <div className='sm:text-[15px] text-[12px]'>Masters in Computer Science</div>
          <div className='italic sm:text-[12px] text-[10px]'>Aug 2021 - May 2023</div>
        </div>
      </div>
      </Card>
      <Card className="p-3 hover:scale-110 transition-all duration-300 min-w-[300px] sm:w-[500px] w-[300px] ">
      <div className="flex flex-row space-x-4 text-sm md:text-lg">
        <Image
          src="/Personal/DTU.png"
          alt="ASU"
          width={80}
          height={80}
          className=" p-2 h-[80px] w-[80px] object-cover"
        />
        <div>
          <div className='font-semibold sm:text-[20px] text-[15px]'>Delhi Technological University</div>
          <div className='sm:text-[15px] text-[12px]'>
            Bachelors in Electrical Engineering
          </div>
          <div className='italic sm:text-[12px] text-[10px]'>Aug 2015 - May 2019</div>
        </div>
      </div>
      </Card>
    </div>
    <Link href='/Contact' className="p-5">
                    <Button className='text-xl p-5 m-5'>
                      <ArrowBigRight /> Contacts
                    </Button>
                  </Link>
    </div>
  );
}
