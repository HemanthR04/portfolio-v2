import ContactLinks from '@/components/ContactLinks'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import WorkLinks from '@/components/WorkLinks'
import { SparklesCore } from '@/components/ui/sparkles'
import React from 'react'

const page = () => {
  return (
    <main className=''>
      
      <Navbar/>
      <Hero/>
      <ContactLinks/>
      <WorkLinks/>
      <Footer/>
    </main>
  )
}

export default page