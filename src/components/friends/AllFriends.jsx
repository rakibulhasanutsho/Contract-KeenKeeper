import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router'

function AllFriends({friend}) {
    const {
        name,
        picture,
        tags,
        days_since_contact,
        status

    } = friend
  return (
    <div   className='space-y-2 text-center p-5'>
        <img className='w-20 h-auto rounded-full mx-auto' src={picture} alt="" />
        <h1 className='text-xl font-semibold'>{name}</h1>
        <p className='text-[12px] text-[#64748B]'>{days_since_contact}d ago</p>
        <ul className='flex gap-2 justify-center'>
            {
                tags.map((tag, ind) => 
                    <li key={ind} className="text-green-900 bg-green-200 px-3 p-1 border border-green-500 rounded-2xl">{tag}</li>
                )
            }
        </ul>
        <p className={`text-white rounded-2xl px-2 p-1 font-medium  ${status === "Overdue" ? "bg-red-500":status ==='On-Track'? "bg-green-700" :"bg-amber-500"}`}>{status}</p>

    </div>
  )
}

export default AllFriends
