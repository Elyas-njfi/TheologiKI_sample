import React from 'react'
import { about } from '../constants'

const People = () => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
        {about.map((person, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-100 rounded-md p-6 text-md border border-neutral-800 font-thin">

              <div className="flex  items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={person.image}
                  alt=""
                />
                <div>
                  <h6>{person.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {person.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default People