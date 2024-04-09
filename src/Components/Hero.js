import React from 'react'
import Line from './Line'
const Hero = () => {
  return (
    <>
        <div className='flex flex-wrap mt-12 mb-4'>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }} className='text-center mx-auto'>
                We're building the<br/> best place on Earth to learn<br/> math and science
            </h1>
        </div>
        <div>
            <p className='text-center mx-auto pb-12 '>In the Process, we've been happy to recieve a lot of<br/> love from our users.</p>
        </div>
        <div className='flex justify-between flex-wrap m-auto w-11/12 '>
          <img src="Left.png"/>
          <img src='Right.png'/>
          <Line color="black"/>
        </div>
       
        </>
  )
}

export default Hero
