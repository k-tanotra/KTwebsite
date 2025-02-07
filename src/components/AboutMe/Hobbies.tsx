import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Icon } from 'lucide-react';
  import { soccerBall } from '@lucide/lab';
  
export default function Hobbies() {
  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-5'>
        <h1 className='sm:text-3xl text-xl p-5'>My Hobbies</h1>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle>
                    <div className='flex flex-row items-center justify-center space-x-4'>
                        <h1>Soccer</h1>
                        <Icon iconNode={soccerBall} />
                    </div>
                </CardTitle>
                <CardDescription><span className='flex items-center spa'>
                    Premier League
                    <img 
                      src="https://img.icons8.com/?size=100&id=VaOFdQFFYAnJ&format=png&color=000000" 
                      alt="Premier League" 
                      width={30} 
                      height={20} 
                      className="object-cover rounded-md ml-1"
                    /> Enthusiast
                  </span></CardDescription>
            </CardHeader>
            <CardContent>
            
                <p>
                  I am a passionate soccer fan, particularly of the Premier League. 
                  My favorite team is Manchester United <img 
                  src="https://img.icons8.com/?size=100&id=21736&format=png&color=000000" 
                  alt="Chess" 
                  width={30} 
                  height={20} 
                  className="object-cover rounded-md"
                />. I enjoy watching matches, 
                  analyzing game strategies, and keeping up with the latest news and transfers.
                </p>
                <p>
                  Some of my favorite players include Wanyne Rooney, Cristiano Ronaldo, 
                  and Roy Keane. I love the excitement and thrill of match days, 
                  and I often engage in discussions with fellow fans about the team`s performance.
                </p>
            </CardContent>
            <CardFooter>
                <p>Glory Glory Man United!</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle>Games</CardTitle>
                <CardDescription>Gaming Enthusiast</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I enjoy playing a variety of video games, from action-packed shooters to immersive RPGs. 
                  Some of my favorite games include:
                </p>
                <ul className="list-disc list-inside">
                  <li>The Witcher 3</li>
                  <li>Cyberpunk 2077</li>
                  <li>God of War</li>
                  <li>Control</li>
                  <li>Age of Empires</li>
                  <li>Anno 1800</li>
                  <li>Elden Ring</li>
                  <li>Path of Exile</li>
                  <li>Unreal Tournament 1999</li>
                </ul>
            </CardContent>
            <CardFooter>
                <p>Let`s play!</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle>TV Shows/Movies</CardTitle>
                <CardDescription>Entertainment Buff</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I love watching TV shows and movies, especially sci-fi and thrillers. 
                  Some of my favorite shows and movies include:
                </p>
                <ul className="list-disc list-inside">
                  <li>Game of Thrones</li>
                  <li>House of the Dragon</li>
                  <li>Breaking Bad</li>
                  <li>Silo</li>
                  <li>Better Call Saul</li>
                  <li>Dune</li>
                  <li>The Last of Us</li>
                  <li>The Office</li>
                  <li>Naruto</li>
                  <li>3 Body Problem</li>
                </ul>
            </CardContent>
            <CardFooter>
                <p>What`s your favorite show?</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle>Programming</CardTitle>
                <CardDescription>Competitive Programmer</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I am passionate about programming and love solving challenging problems on platforms like LeetCode. 
                  Competitive programming helps me improve my problem-solving skills and think algorithmically.
                </p>
                <p>
                  I regularly participate in coding contests and enjoy the thrill of competing against other programmers. 
                  Some of my favorite topics include data structures, algorithms, and optimization problems.
                </p>
            </CardContent>
            <CardFooter>
                <p>Happy coding!</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle>Science & Tech</CardTitle>
                <CardDescription>Tech Enthusiast</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I am fascinated by the latest advancements in science and technology. 
                  I love reading about new discoveries and innovations. 
                  Some of my favorite topics include artificial intelligence, space exploration, and quantum computing.
                </p>
                <p>
                  I enjoy following tech news and staying updated with the latest trends in the industry. 
                  I believe that technology has the power to transform our lives and solve some of the world`s biggest challenges.
                </p>
            </CardContent>
            <CardFooter>
                <p>Stay curious!</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle>Chess</CardTitle>
                <CardDescription>Strategic Thinker</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I enjoy playing chess and improving my strategic thinking skills. 
                  It`s a great way to challenge the mind and have fun.
                </p>
                <p>
                  Chess helps me develop patience, foresight, and the ability to think several steps ahead. 
                  I love studying famous games and learning new strategies to improve my play.
                </p>
            </CardContent>
            <CardFooter>
                <p>Checkmate!</p>
            </CardFooter>
        </Card>
        </div>
      </div>
  )
}
