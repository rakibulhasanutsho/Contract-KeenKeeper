import React from 'react'

function HomePageGoals() {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between flex-wrap  gap-5'>
      <div className='text-center p-10 w-full md:w-70 shadow-sm rounded'>
        <h3 className='text-3xl font-bold text-black'>10</h3>
        <p className='text-[16px] font-medium'>Total Friends</p>
      </div>
      <div className='text-center w-full md:w-70 p-10 shadow-sm rounded'>
        <h3 className='text-3xl font-bold text-black'>3</h3>
        <p className='text-[16px] font-medium'>On Track</p>
      </div>
      <div className='text-center  w-full md:w-70 p-10 shadow-sm rounded'>
        <h3 className='text-3xl font-bold text-black'>6</h3>
        <p className='text-[16px] font-medium'>Need attention</p>
      </div>
      <div className='text-center  w-full md:w-70 p-10 shadow-sm rounded'>
        <h3 className='text-3xl font-bold text-black'>12</h3>
        <p className='text-[16px] font-medium'>Interaction This Month</p>
      </div>
    </div>
  )
}

export default HomePageGoals
