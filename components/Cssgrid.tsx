'use client'
import { motion } from 'framer-motion';
import React from 'react'

const data = [
    {
      id: 1,
      name: "Product A",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "product_a.jpg"
    },
    {
      id: 2,
      name: "Product B",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "product_b.jpg"
    },
    {
      id: 3,
      name: "Product C",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "product_c.jpg"
    },
    {
      id: 3,
      name: "Product D",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "product_c.jpg"
    },
    {
      id: 3,
      name: "Product E",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "product_c.jpg"
    },
   
  ];

  const fadeInAnimationVariants = {
    intital: {
      opacity: 0,
      y: 100,
    },
    animate: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.10 * i,
      },
    }),
  };
const Cssgrid = () => {

    const boxStyle = 'text-white  rounded-xl p-2 flex flex-col justify-end items-start'
  return (
    <div className='grid py-[50px] md:grid-cols-3 auto-rows-[300px] gap-4 my-1  '>
        {
            data.map((item,i)=>(
                <motion.div
                variants={fadeInAnimationVariants}
                initial="intital"
                animate="animate"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={i}
                key={i} className={`${boxStyle} ${i === 0 ? 'md:col-span-2' :''}  bg-Secondary p-4`}>
                    <h1 className='text-whiteFA'>{item.name}</h1>
                    <p className='text-gray666 leading-4 text-sm'>{item.description}</p>
                </motion.div>
            ))
        }
    </div>
  )
}

export default Cssgrid