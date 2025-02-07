"use client"
import { Button } from "../components/ui/button";
import { ArrowBigRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/AboutMe');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-lg sm:text-3xl">Hello 👋</h1>
      <h1 className="text-2xl sm:text-6xl  p-5 font-mono font-semibold text-center">I`m Kanishk Tanotra!</h1>
      <h2 className="text-md sm:text-xl p-5 font-extralight"> Check out my portfolio </h2>
      <Button className="sm:h-10 h-7" onClick={handleButtonClick}><ArrowBigRight/></Button>
    </div>
  );
}
