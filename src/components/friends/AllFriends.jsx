import React, { useLayoutEffect } from 'react'

function AllFriends({friend}) {
    const {
        name,
        picture,
        tags,
        days_since_contact,
        status

    } = friend
  return (
    <div  className='space-y-2 text-center'>
        <img className='w-15 h-auto rounded-full mx-auto' src={picture} alt="" />
        <h1 className='text-xl font-semibold'>{name}</h1>
        <p className='text-[12px] text-[#64748B]'>{days_since_contact}d ago</p>
        <ul className='flex gap-2 justify-center'>
            {
                tags.map((tag, ind) => 
                    <li key={ind} className='text-red-500'>{tag}</li>
                )
            }
        </ul>
        <p>{status}</p>

    </div>
  )
}

export default AllFriends
