"use client"
import { BackgroundLines } from '@/components/ui/background-lines'
import { FlipWords } from '@/components/ui/flip-words'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='oxpw'>
      <BackgroundLines className='hero-section'>
        <div className='hero-content'>
          <Image src={"/me.jpg"} alt='Muhammad Jazib' width={200} height={200} className='image' />
          <h2>Muhammad Jazib</h2>
          <h1>
            <FlipWords words={["Full-Stack Developer", "User Interface Designer", "User Experience Researcher", "Application Developer", "Blockchain Consultant"]} />
          </h1>
          <HoverBorderGradient containerClassName="rounded-full pretty-button-parent" as="button" className="pretty-button">
            <Link href={"/agent"}>Talk to My Agent</Link>
          </HoverBorderGradient>
        </div>
      </BackgroundLines>
    </div>
  )
}

export default page