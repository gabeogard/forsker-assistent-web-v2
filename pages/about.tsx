import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
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
            <h2>Hvem er vi:</h2>
            <p><strong>Anita Øgård-Repål</strong></p>
            <p>Universitetslektor/Ph.D stipendiat, Universitetet i Agder</p>
            <p><strong>Monika Øgård</strong></p>
            <p>Universitetslektor/Ph.D stipendiat, Universitetet i Agder</p>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default About;