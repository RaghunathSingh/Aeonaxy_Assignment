// import React from 'react'
// import Logo from './Logo'

// const Header = () => {
//   return (
//     <>
//         <div className='flex flex-row justify-between mx-12 flex-wrap my-4'>
//             <div className='flex flex-row'>
//                 <Logo/>
//             </div>
//             <button className='border-2 border-black px-4 my-2 rounded-md hover:bg-sky-200 hover:border-blue-400'>Log in</button>
//         </div>
       
//     </>
//   )
// }
// export default Header
import React from 'react'
import Logo from './Logo'


const Header = () => {
  return (
    <>
      <div className='flex flex-row justify-between mx-4 md:mx-12 flex-wrap my-4'>
        <div className='flex flex-row'>
          <Logo />
        </div>
        <button className='border-2 border-black px-4 my-2 rounded-md hover:bg-sky-200 hover:border-blue-400'>Log in</button>
      </div>
    </>
  )
}
export default Header