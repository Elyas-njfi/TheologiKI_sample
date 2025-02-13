import React from 'react'
import People from './People'

const AboutUs = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-10">
      Who are we?
      </h2>
      <div className="flex flex-col items-center mt-6 lg:mt-5">
        <p style={{ textJustify: "inter-word", lineHeight: "1.8", letterSpacing: "0.5px" }} className='text-lg lg:text-justify text-left text-neutral-500 max-w-4xl'>
        We are an interdisciplinary collective of educators, theologians, technologists, and community partners united by the goal of harnessing AI to deepen theological understanding and promote interreligious engagement. Through ongoing research, carefully curated resources, and innovative digital tools, we strive to create a vibrant, inclusive platform that empowers educators, learners, and communities worldwide
        </p>
      </div>
      <People />
    </div>
  )
}

export default AboutUs