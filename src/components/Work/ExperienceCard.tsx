import React from 'react'
import {
    Card,
  } from "@/components/ui/card";
import Image from 'next/image'

interface ExperienceData {
  // Define the structure of the 'data' object here
  University: string;
  Position: string;
  Timeline: string;
  Location: string;
  Icon: string;
  Bullets: string[];
  // Add other properties as needed
}
export default function ExperienceCard({ data }: { data: ExperienceData} ) {
  const {University, Position, Timeline, Location, Icon, Bullets} = data

  return (
    <div className='flex flex-cols justify-center items-center p-5 sm:max-w-[1000px]'>
        <Card className='p-4 border-2 rounded-3xl shadow-lg hover:scale-110 transition-all duration-300'>
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <Image
                          src={Icon}
                          alt="text description"
                          width={50}
                          height={60}
                          className="rounded-full p-2 h-[80px] w-[80px]"
                        />
                <div className='flex flex-col max-w-[600px] sm:max-w-[1000px]'>
                    <h1 className='font-semibold text-[20px]'>{University}</h1>
                    <h1 className='font-semibold text-[15px]'>{Position}</h1>
                    <h1 className='italic text-[12px]'>{Timeline}</h1>
                    <h1 className='font-extralight text-[12px]'>{Location}</h1>
                </div>
            </div>
            <div>
            <ul className="list-disc list-outside p-5">
            {Bullets.map((bullet, index) => (
              <div key={index} className="bullet-item max-w-[600px] sm:text-[15px]">
                <li className="list-outside list-disc">{bullet}</li>
              </div>
            ))}
            </ul>
          </div>
        </div>
        </Card>
    </div>
  )
}
