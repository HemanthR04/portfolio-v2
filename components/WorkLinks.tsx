/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import arrow from "../public/arrow.png";
import memoji1 from "../public/Memoji1.png";
import memoji2 from "../public/Memoji2.png";
import memoji3 from "../public/Memoji3.png";
import memoji4 from "../public/Memoji4.png";
import Image from 'next/image';
import Link from 'next/link';
const WorkLinks = () => {
  return (
    <>
    <div className="workLinks flex flex-col justify-center items-center gap-2">
        <Link href={""}>
        <div className="work bg-Secondary w-[382px] h-[97px] rounded-md m-1 flex justify-center items-center">
            <div className='workLogo w-[48px] h-[48px] bg-black rounded-md'>
                <Image src={memoji3} alt='memoji'/>
            </div>
            <div className="workText px-4">
                <h1 className='text-whiteFA'>Work</h1>
                <p className='text-gray666 w-[220px] leading-4'>Explore some of my projects</p>
            </div>
            <div className='workLogo w-[48px] h-[48px] bg-transparent rounded-md border-2 border-gray666'>
            <Image src={arrow} alt='arrow'/>
            </div>
        </div>
        </Link>
        <Link href={""}>
        <div className="work bg-Secondary w-[382px] h-[97px] rounded-md m-1 flex justify-center items-center">
            <div className='workLogo w-[48px] h-[48px] bg-black rounded-md'>
            <Image src={memoji2} alt='memoji'/>
            </div>
            <div className="workText px-4">
                <h1 className='text-whiteFA'>Play</h1>
                <p className='text-gray666 w-[220px] leading-4'>Take a look at some of my creations</p>
            </div>
            <div className='workLogo w-[48px] h-[48px] bg-transparent rounded-md border-2 border-gray666'>
            <Image src={arrow} alt='arrow'/>
            </div>
        </div>
        </Link>
        <Link href={""}>
        <div className="work bg-Secondary w-[382px] h-[97px] rounded-md m-1 flex justify-center items-center">
            <div className='workLogo w-[48px] h-[48px] bg-black rounded-md'>
            <Image src={memoji4} alt='southcrew Logo'/>
            </div>
            <div className="workText px-4">
                <h1 className='text-whiteFA'>Southcrew</h1>
                <p className='text-gray666 w-[220px] leading-4'>Southcrew , a studio where art 
meets business</p>
            </div>
            <div className='workLogo w-[48px] h-[48px] bg-transparent rounded-md border-2 border-gray666'>
            <Image src={arrow} alt='arrow'/>
            </div>
        </div>
        </Link>
        <Link href={""}>
        <div className="work bg-Secondary w-[382px] h-[97px] rounded-md m-1 flex justify-center items-center">
            <div className='workLogo w-[48px] h-[48px] bg-black rounded-md'>
            <Image src={memoji1} alt='memoji'/>
            </div>
            <div className="workText px-4">
                <h1 className='text-whiteFA'>Connect with me</h1>
                <p className='text-gray666 w-[220px] leading-4'>Got a concept? Let's collaborate</p>
            </div>
            <div className='workLogo w-[48px] h-[48px] bg-transparent rounded-md border-2 border-gray666'>
            <Image src={arrow} alt='arrow'/>
            </div>
        </div>
        </Link>
        
    </div>
    </>
  )
}

export default WorkLinks