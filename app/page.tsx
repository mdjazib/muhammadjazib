"use client"
import { BackgroundLines } from '@/components/ui/background-lines'
import { FlipWords } from '@/components/ui/flip-words'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { cn } from "@/lib/utils";
import Image from 'next/image'
import { DraggableCardDemo } from './DraggableCardDemo';
import AskMe from './AskMe';

const page = () => {
  return (
    <div className='oxpw'>
      {/* <div className="xpage" ><DraggableCardDemo /></div>
      <div className="xpage" ><AskMe /></div> */}
      <BackgroundLines className='hero-section'>
        <div className='hero-content'>
          <Image src={"/me.jpg"} alt='Muhammad Jazib' width={200} height={200} className='image' />
          <h2>Muhammad Jazib</h2>
          <h1>
            <FlipWords words={["Full-Stack Developer", "User Interface Designer", "User Experience Researcher", "Application Developer", "Blockchain Consultant"]} />
          </h1>
          <HoverBorderGradient containerClassName="rounded-full pretty-button-parent" as="button" className="pretty-button">
            <span>Digital Resume</span>
          </HoverBorderGradient>
        </div>
      </BackgroundLines>
      {/* <div className="relative flex h-[50rem] w-full items-center justify-center bg-black about-section">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#222222_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          <TextHoverEffect text='About' />
          <TextGenerateEffect words='I design with purpose and code with precision. From bold UIs to seamless backend logic — I build digital things that matter.' className='about-jazib' />
        </p>
      </div> */}
    </div>
  )
}

export default page