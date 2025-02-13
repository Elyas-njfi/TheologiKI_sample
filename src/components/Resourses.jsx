import React from 'react'

const Resourses = () => {
  return (
    <div className='mt-20'>
        <div className="text-center">
            <span className='bg-neutral-100 text-orange-800 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                resourses
            </span>
        </div>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pt-5'>
        What do you need to have 
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "} or download?</span>
        </h2>
        <div className="flex flex-col items-center mt-6 lg:mt-5">
            <p style={{ textJustify: "inter-word", lineHeight: "1.8", letterSpacing: "0.5px" }} className='mt-10 text-lg lg:text-justify text-left text-neutral-500 max-w-4xl'>
            Discover a growing collection of audio, visual, and textual materials tailored to enrich theological study, interfaith engagement, and multicultural education
            </p>
        </div>
    </div>
  )
}

export default Resourses