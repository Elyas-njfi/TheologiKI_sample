import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import theme from "../assets/themes.png"
import theme2 from "../assets/themes2.png"
import theme3 from "../assets/themes3.png"
import { checklistItems } from "../constants";

const Themes = () => {
  return (
    <div className='mt-20'>
        <div className="text-center">
            <span className='bg-neutral-100 text-orange-800 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                themes
            </span>
        </div>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide pt-5'>
            What Are You 
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "} Interested In?</span>
        </h2>
        <div className="flex flex-col items-center mt-6 lg:mt-5">
            <p style={{ textJustify: "inter-word", lineHeight: "1.8", letterSpacing: "0.5px" }} className='mt-10 text-lg lg:text-justify text-left text-neutral-500 max-w-4xl'>
            Explore a rich assortment of topics designed to spark curiosity and guide deeper inquiry into theology, faith 
            education, and intercultural understanding. Whether you’re an educator seeking fresh lesson ideas, a 
            researcher investigating interreligious dialogue, or a parent looking for ways to nurture inclusive values at 
            home, these themes offer starting points and conversation prompts that tap into the full potential of our 
            AI-assisted platform.
            </p>
        </div>
        <div className='flex flex-wrap justify-center lg:mt-10'>
            <div className="pt-15 px-2 w-full lg:w-1/2">
                <img src={theme2} alt="Theme2" />
                <img src={theme} alt="Theme" />
                <img src={theme3} alt="Theme3" />
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12">
                <div className="text-green-600 mx-6 bg-neutral-100 h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                </div>
                <div>
                    <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                    <p className="text-md text-neutral-500">{item.description}</p>
                </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Themes