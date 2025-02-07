"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image';
export default function Hobbies() {
  return (
    <div className='flex flex-col items-center justify-center pt-5 pb-5'>
        <h1 className='sm:text-3xl text-xl p-5'>My Hobbies</h1>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle>
                    <div>
                        <h1 className='sm:text-2xl text-xl' >Soccer</h1>
                    </div>
                </CardTitle>
                <CardDescription>
                    Premier League Enthusiast 
                  </CardDescription>
            </CardHeader>
            <CardContent>
            
                <p>
                  I am a passionate soccer fan, particularly of the Premier League. 
                  My favorite team is Manchester United I enjoy watching matches, 
                  analyzing game strategies, and keeping up with the latest news and transfers.
                  Apart from being an fan I also regularly play soccer myself. I have been part of my university team and regularly play in sunday leagues.
                </p>
                <div className='flex flex-row items-center justify-between space-x-2'>
                <Image 
                  src="https://img.icons8.com/?size=100&id=21736&format=png&color=000000" 
                  alt="Man Utd" 
                  unoptimized
                  title="Man Utd"
                  width={20} 
                  height={30} 
                  className="object-cover rounded-md sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] mt-5"
                  />
                 
                  </div>
            </CardContent>
            <CardFooter>
                <p>Glory Glory Man United!</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle className='sm:text-2xl text-xl' >Games</CardTitle>
                <CardDescription>Gaming Enthusiast</CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-left'>
                  I enjoy playing a variety of video games, from action-packed shooters to immersive RPGs. 
                  Some of my favorite games include:
                </p>
                <div className='grid grid-cols-3 sm:grid-cols-6 gap-2'>
                <Image 
                    src="https://www.giantbomb.com/a/uploads/original/20/201266/3536200-8148212612-EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f.jpg" 
                    alt="Wither 3" 
                    unoptimized
                    title="Wither 3"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://i.namu.wiki/i/2nOFDfztOmuGkzh8p0FnksHx3UU2fSnKj0_2wYYH_DMNxE8Mrn1I8oQsXlsV2S5dzHA_iQcAlxwZpF5M4sbdEA.webp" 
                    alt="Cyberpunk 2077" 
                    unoptimized
                    title="Cyberpunk 2077"
                    width={70} 
                    height={60} 
                    className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://media.gamestop.com/i/gamestop/god-of-warHeroTM/god-of-war.jpg?$POI$&w=768&aspect=.66:1" 
                    alt="God of war" 
                    unoptimized
                    title="God of war"
                    width={70} 
                    height={60} 
                    className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcv6MBw2ElPFV3gdMJGtOp0weIArT_QhK_mWLYZkcGeaIiauQVVyrtAh0_lS_Sj84PMo&usqp=CAU" 
                    alt="Control" 
                    unoptimized
                    title="Control"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://store-images.s-microsoft.com/image/apps.55056.13991012152837663.1297136a-f273-41f1-947f-59044c848c55.7dbf4684-b0de-4879-ba2e-c7460c910965" 
                    alt="Age of Empire 2" 
                    unoptimized
                    title="Age of Empire 2"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://i.namu.wiki/i/-tnGEoidHAz5FJ7HMDzkX2HmnQFIjc36nu8D5d7mM4DBYg_TkUG8NYwM8WK4Gjf6RqP8LboRt4mfVE7ELSInlA.webp" 
                    alt="Anno 1800" 
                    unoptimized
                    title="Anno 1800"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BZGQxMjYyOTUtNjYyMC00NzdmLWI4YmYtMDhiODU3Njc5ZDJkXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg" 
                    alt="Elden Ring" 
                    unoptimized
                    title="Elden Ring"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://image.api.playstation.com/cdn/UP4781/CUSA11924_00/hOKaBpQx5VBNW3Wr7lL0w8X2yY2S9U1N.png" 
                    alt="Path of exile" 
                    unoptimized
                    title="Path of exile"
                    width={70} 
                    height={60} 
                    className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://archive.org/download/ut-99/01-unreal-tournament-windows-front-cover.jpg" 
                    alt="Unreal Tournament 1999" 
                    unoptimized
                    title="Unreal Tournament 1999"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BYmExZDNiMTUtZDJlMS00ZGU0LWFjZmQtODhjNTBkNDliZGE5XkEyXkFqcGc@._V1_.jpg" 
                    alt="Jedi Fallen Order" 
                    unoptimized
                    title="Jedi Fallen Order"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://image.api.playstation.com/vulcan/ap/rnd/202106/2216/l786jmG4WHmfCcfiVyiL9xSQ.jpg" 
                    alt="Plague Tale" 
                    unoptimized
                    title="Plague Tale"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/en/e/e8/MassEffect.jpg" 
                    alt="Mass Effect" 
                    unoptimized
                    title="Mass Effect"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                </div>
            </CardContent>
            <CardFooter>
                <p >Let`s play!</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle className='sm:text-2xl text-xl'>TV Shows/Movies</CardTitle>
                <CardDescription>Entertainment Buff</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I love watching TV shows and movies, especially sci-fi and thrillers. 
                  Some of my favorite shows and movies include:
                </p>
                <div className='grid grid-cols-3 sm:grid-cols-6 gap-2'>
                <Image 
                    src="https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
                    alt="Game of Thrones" 
                    unoptimized
                    title="Game of Thrones"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
                    alt="House of the Dragon" 
                    unoptimized
                    title="House of the Dragon"
                    width={70} 
                    height={60} 
                    className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
                    alt="Breaking Bad" 
                    unoptimized
                    title="Breaking Bad"
                    width={70} 
                    height={60} 
                    className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BNjA5ODM4YTEtNDcxZi00N2ViLTg0MTgtNGQxNjBjZWY5YTk3XkEyXkFqcGc@._V1_.jpg" 
                    alt="Silo" 
                    unoptimized
                    title="Silo"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15677306_b_v8_aa.jpg" 
                    alt="Better Call Saul" 
                    unoptimized
                    title="Better Call Saul"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://sm.ign.com/ign_ap/cover/d/dune-2021/dune-2021_1pb8.jpg" 
                    alt="Dune" 
                    unoptimized
                    title="Dune"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BY2JiNjU3NWYtMTRlYS00NzY3LWE2NDQtZGFkNWE2MDU4OTExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
                    alt="The Last of Us" 
                    unoptimized
                    title="The Last of Us"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
                    alt="The Office" 
                    unoptimized
                    title="The Office"
                    width={70} 
                    height={60} 
                    className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
                    alt="Naruto" 
                    unoptimized
                    title="Naruto"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg" 
                    alt="Death Note" 
                    unoptimized
                    title="Death Note"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://resizing.flixster.com/FynelrRwgvfx488b9LuR9iPhSP8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzBlNTZjYjYtYjRhOC00ZjkxLWIwYWEtZDhjNzdjODM5YjliLmpwZw==" 
                    alt="3 Body Problem" 
                    unoptimized
                    title="3 Body problem"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                  <Image 
                    src="https://i.redd.it/netflix-the-8-show-character-poster-premieres-may-17-v0-nel805pcq4wc1.jpg?width=1080&format=pjpg&auto=webp&s=d2ba3b2d89e35108d0537b7d0928b80662346b13" 
                    alt="The 8 show" 
                    unoptimized
                    title="The 8 show"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-full sm:h-full w-[80px] h-[100px]"
                  />
                </div>
            </CardContent>
            <CardFooter>
                <p>What`s your favorite show?</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle className='sm:text-2xl text-xl'>Programming</CardTitle>
                <CardDescription>Competitive Programmer</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I am passionate about programming and love solving challenging problems on platforms like LeetCode. 
                </p>
                <p>
                  I regularly participate in coding contests and enjoy the thrill of competing against other programmers. 
                  Some of my favorite topics include data structures, algorithms, and optimization problems.
                </p>
                <div className='flex flex-row items-center justify-left space-x-2'>
                <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3Ir9453MFZjzGK8jeX9en0kjW8igj-FTNg&s" 
                    alt="Leetcode" 
                    unoptimized
                    title="Leetcode"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-[100px] sm:h-[100px] w-[80px] h-[100px] pt-5"
                  />
                </div>
            </CardContent>
            <CardFooter>
                <p>Happy coding!</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle className='sm:text-2xl text-xl'>Science & Tech</CardTitle>
                <CardDescription>Tech Enthusiast</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I am fascinated by the latest advancements in science and technology. 
                  I love reading about new discoveries and innovations. 
                  Some of my favorite topics include artificial intelligence, space exploration, and quantum computing.
                </p>
                <div className='flex flex-row items-center justify-left space-x-2'>
                <Image 
                    src="https://plus.unsplash.com/premium_photo-1681426558755-71090cebadff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Physics" 
                    unoptimized
                    title="Physics"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-[100px] sm:h-[100px] w-[80px] h-[100px] pt-5"
                  />
                </div>
            </CardContent>
            <CardFooter>
                <p>Stay curious!</p>
            </CardFooter>
        </Card>
        <Card className='w-[300px] sm:w-[700px]'>
            <CardHeader>
                <CardTitle className='sm:text-2xl text-xl'>Chess</CardTitle>
                <CardDescription>Strategic Thinker</CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                  I enjoy playing chess and improving my strategic thinking skills. Love to play during my free time and also participate in online tournaments.
                </p>
                <div className='flex flex-row items-center justify-left space-x-2'>
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg" 
                    alt="Chess" 
                    unoptimized
                    title="Chess"
                    width={70} 
                    height={60} 
                     className="object-cover rounded-md sm:w-[100px] sm:h-[100px] w-[80px] h-[100px] pt-5"
                  />
                </div>
            </CardContent>
            <CardFooter>
                <p>Checkmate!</p>
            </CardFooter>
        </Card>
        </div>
      </div>
  )
}
