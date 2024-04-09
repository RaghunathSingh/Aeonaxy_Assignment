import React from 'react'

const PressBox = ({first,second,third}) => {
  return (
    <>
         <div>
            <h3 className='text-base text-gray-500'>{first}</h3>
            <p className='text-base font-black mb-16'>{second}</p>
          </div>
    </>
  )
}

export default PressBox