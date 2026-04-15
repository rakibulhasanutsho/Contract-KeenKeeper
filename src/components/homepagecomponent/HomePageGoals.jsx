import React from 'react'

function HomePageGoals() {
  return (
    <div className='container mx-auto flex justify-between gap-5'>
      <div className='text-center p-10 w-70 shadow-sm rounded'>
        <h3 className='text-3xl font-bold text-black'>10</h3>
        <p className='text-[16px]'>Total Friends</p>
      </div>
      <div className='text-center w-70 p-7 shadow-sm rounded'>
        <h3 className='text-3xl font-bold text-black'>3</h3>
        <p className='text-[16px]'>On Track</p>
      </div>
      <div className='text-center w-70 p-10 shadow-sm rounded'>
        <h3 className='text-3xl font-bold text-black'>6</h3>
        <p className='text-[16px]'>Need attention</p>
      </div>
      <div className='text-center w-70 p-10 shadow-sm rounded'>
        <h3 className='text-3xl font-bold text-black'>12</h3>
        <p className='text-[16px]'>Interaction This Month</p>
      </div>
    </div>
  )
}

export default HomePageGoals
