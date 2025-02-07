import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Briefcase,ArrowBigRight, Eye} from 'lucide-react';
import { Button } from "../ui/button";
import Link from 'next/link';
const data = [{
  University: "Arizona State University",
  Position: "Software Engineer",
  Timeline: "Jan 2024 - May 2025",
  Location: "Tempe, Arizona",
  Icon: "/Personal/ASU.png",
  Bullets: [
     "Designed and deployed scalable full-stack applications using Node.js for front-end services and Python for back-end logic, ensuring seamless integration and user experience.",
   "Optimized backend architecture to improve performance, reducing response times by 50% through efficient API design, database indexing, and resource management.",
   "Leveraged AWS cloud infrastructure (EC2, S3, Lambda, RDS) to deploy highly available and fault-tolerant applications, ensuring system scalability and reliability",
  ],
},

{
  University: "MathWorks",
  Position: "Software Engineer Intern",
  Timeline: "Aug 2022 – Dec 2022",
  Icon: "/Personal/MathWorks.png",
  Location: "Natick, Massachusetts",
  Bullets: [
     "Redesigned and optimized the backend of the Mixed-Signal Analyzer app in C++, improving user experience by 50% through enhanced responsiveness and performance by 30% via efficient resource utilization and algorithmic refinements.",
   "Developed robust Java APIs and services to automate the conversion of over 100,000 tr0, FineSim, SW, and AC0 files into MATLAB-readable formats, streamlining data analysis workflows.",
    "Integrated OpenGL for rendering interactive visualizations, improving graphical fidelity and real-time processing in mixed-signal",
    "Refined multithreading strategies with OpenMP, ensuring efficient CPU core utilization and scalability for computational tasks",
  ],
},

{
  University: "Truveta",
  Position: "Software Engineer Intern",
  Timeline: "May 2022 - Aug 2022",
  Icon: "/Personal/Truveta.png",
  Location: "Bellevue, Washington",
  Bullets: [
     "Developed and deployed scalable microservices in C# using gRPC, optimizing Elasticsearch queries on Azure to enhance search functionality, resulting in a 10% improvement in query performance.",
   "Engineered a real-time progress bar service for precise query progress estimation, improving application usability.",
   "Designed and implemented interactive dashboards with Plotly, ipywidgets, and Matplotlib, increasing operational efficiency by 20%",
   "Built an automated analytical query platform, deploying secure and efficient Docker containers via Azure DevOps pipelines, streamlining the application deployment process."
  ],
},

{
  University: "PwC",
  Position: "Software Engineer",
  Timeline: "July 2019 - Aug 2021",
  Icon: "/Personal/Pwc.png",
  Location: "Bangalore, India",
  Bullets: [
    "Developed and launched a React.js frontend portal for clients, enabling real-time tracking and recording of services, improving user experience and engagement.",
    "Implemented Java-based REST APIs for seamless and secure financial data exchange between PwC databases, Redis Cache, and MySQL, resulting in a 45% improvement in data management efficiency.",
    "Built workflows for approvals and automatic notifications via email and SMS, reducing response times by 25%",
    "Collaborated in Agile teams, following SDLC best practices, to deliver high-quality features on schedule, tracked through JIRA for streamlined task management.",
  ],
},
]
export default function Experience() {
  return (
    <div className='flex flex-col items-center justify-center  p-5 rounded-2xl'>
        <div className='flex flex-rows items-center justify-center space-x-[20px] sm:text-[30px] text-[20px] font-bold pb-10'> <Briefcase className='h-[30px] w-[30px]' /> <h1>Professional Experience </h1></div>
        <div>
        <Link href='/ViewResume'>
              <Button className='text-xl p-5 m-5'>
                <Eye /> View Resume
              </Button>
            </Link>
        </div>
        <div>
        {data.map((d, index) => (
          <ExperienceCard key={index} data={d}/>
        ))}
        </div>
        <div>
        <Link href='/Education'>
              <Button className='text-xl p-5 m-5'>
                <ArrowBigRight />Education
              </Button>
            </Link>
        </div>
    </div>
  )
}
