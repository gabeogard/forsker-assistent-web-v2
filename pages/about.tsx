import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const About: NextPage = () => {
  return (
    <div>
        <title>Om Oss</title>
      <Navbar/>
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Om oss
            </h1>
            <p className="py-6">
            Forskerassistenten drives av forskere som selv ser behovet for en forskerassistent når tiden ikke strekker til. Vi har flere års erfaring med å transkribere og tolke forskningsdata, og vet også viktigheten av korrekt og lovmessig datahåndtering.
            </p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default About