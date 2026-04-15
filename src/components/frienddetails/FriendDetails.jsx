import React from 'react'

function FriendDetails({friend}) {
    const {
        name,
        picture,
        tags,
        days_since_contact,
        status,
        bio,
        email

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
        </div>
        <div className='flex-2'>

        </div>
    </div>
  )
}

export default FriendDetails
