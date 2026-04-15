import React from 'react'
import { RiTimerFlashLine } from "react-icons/ri";
import { RiArchiveLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

function FriendDetails({friend}) {
    const {
        name,
        picture,
        tags,
        days_since_contact,
        status,
        bio,
        email,
        goal,
        next_due_date,
        

    } = friend
  return (
//       {
//     "id": 2,
//     "name": "Arjun Mehta",
//     "picture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     "email": "amehta@webmail.com",
//     "days_since_contact": 13,
//     "status": "almost due",
//     "tags": ["college", "friend"],
//     "bio": "Roommate from sophomore year. Plays Valorant.",
//     "goal": 14,
//     "next_due_date": "2026-04-16"
//   }
    <div className='flex gap-10'>
        <div className='flex-1'>
            <div className='shadow-sm text-center space-y-3 p-5'>
                <img className='w-15 rounded-full mx-auto' src={picture} alt="" />
                <p className={`text-white rounded-2xl px-2 p-1 font-medium w-25 mx-auto ${status === "Overdue" ? "bg-red-500":status ==='On-Track'? "bg-green-700" :"bg-amber-500"}`}>{status}</p>
                <ul className='flex gap-2 justify-center'>
                {
                    tags.map((tag, ind) => 
                        <li key={ind} className="text-green-900 text-wrap bg-green-200 px-3 p-1 border border-green-500 rounded-2xl">{tag}</li>
                    )
                 }
                </ul>
                <p className='text-[16px font-medium text-[#64748B]'>{bio}</p>
                <p className='text-[16px  text-[#64748B]'>preferred: <span>{email}</span></p>

            </div>
            <div className='my-5 space-y-3'>
                <span className='flex gap-2 justify-center p-2 w-full shadow-sm'>
                  <RiTimerFlashLine className='my-auto'></RiTimerFlashLine>
                  <p className='font-semibold '>Snooze 2 Weeks</p>
                </span>
                <span className='flex gap-2 justify-center  p-2 w-full shadow-sm'>
                  <RiArchiveLine className='my-auto'></RiArchiveLine>
                  <p className='font-semibold '>Archive</p>
                </span>
                <span className='flex justify-center gap-2 p-2 w-full shadow-sm '>
                  <RiDeleteBin6Line className='my-auto'></RiDeleteBin6Line>
                  <p className='font-semibold text-red-400 '>Delete</p>
                </span>
                

            </div>
        </div>
        <div className='flex-2'>
                 <div className='flex justify-between'>
                    <div className='p-5 px-7 shadow-sm text-center'>
                        <h3 className='text-3xl font-bold text-[#244D3F]'>{days_since_contact}</h3>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='p-5 shadow-sm text-center'>
                        <h3 className='text-3xl font-bold text-[#244D3F]'>{goal}</h3>
                        <p className="text-[#64748B]">Goal (Days)</p>
                    </div>
                    
                    <div className='p-5 shadow-sm text-center'>
                        <h3 className='text-3xl font-bold text-[#244D3F]'>{next_due_date}</h3>
                       <p className='text-[#64748B]'> Next Due</p>
                        </div>
                 </div>
        </div>
    </div>
  )
}

export default FriendDetails
