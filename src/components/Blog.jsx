import React from 'react'
import blog from "../assets/blog.png"

const Blog = () => {
  return (
    <div className='mt-20'>
        <div className="text-center">
            <span className='bg-neutral-100  text-orange-800  rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                blog
            </span>
        </div>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pt-5'>
        What thoughts and experiences do you want 
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "} to share?</span>
        </h2>
        <div className="flex flex-col items-center mt-6 lg:mt-5">
            <p style={{ textJustify: "inter-word", lineHeight: "1.8", letterSpacing: "0.5px" }} className='mt-10 text-lg lg:text-justify text-left text-neutral-500 max-w-4xl'>
            Add your voice to the conversation on theology, interfaith insights, and multicultural journeys. Delve into reflections, share personal stories, or explore new perspectives—your ideas spark the dialogue that shapes our shared future
            </p>
        </div>
        <div className="flex justify-center my-10">
            <a href="#" className='py-3 px-4 mx-3 rounded-md border text-center block'>
                Explore Our Blog
            </a>
        </div>
        <div className='flex flex-wrap justify-center lg:mt-10'>
            <div className="px-2 w-full lg:w-1/2">
                <img src={blog} alt="Blog" />
            </div>
        </div>
    </div>
  )
}

export default Blog