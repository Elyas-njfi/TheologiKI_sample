import React from 'react'
import { features } from '../constants'

const FearureSection = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className="text-center">
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide'>
                What does 
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "} TheologiKI do?</span>
            </h2>
            <div className="flex flex-col items-center mt-6 lg:mt-10">
                <p style={{ textJustify: "inter-word", lineHeight: "1.8", letterSpacing: "0.5px" }} className='mt-10 text-lg lg:text-justify text-left text-neutral-500 max-w-4xl'>
                TheologiKI is an AI-powered platform for interreligious learning, built on scholarly and peer-reviewed data to ensure reliability and academic integrity. It bridges the richness of diverse religious traditions into a unified, accessible space, promoting cross-cultural learning and interreligiousengagement. By curating multilingual scholarly resources, fine-tuning advanced AI language models, and integrating rigorous pedagogical frameworks, TheologiKI empowers educators, scholars, and communities to navigate faith and practice in an increasingly interconnected world. More than just an AI tool, TheologiKI serves as a trusted academic companion, preserving and amplifying diverse theological and worldview voices while equipping users to address ethical, spiritual, and social challenges with depth, accuracy, and shared understanding. Available 24/7, TheologiKI is always ready to support your research, teaching, interreligious conversations, or your search for spiritual and cross-religious insights.
                </p>
            </div>
            
        </div>
        <div className="text-center pt-20">
            <span className='bg-neutral-100 dark:bg-neutral-900 text-orange-800 dark:text-orange-500  rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
                features
            </span>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20" >
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/2" >
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-100 dark:bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500 " >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FearureSection