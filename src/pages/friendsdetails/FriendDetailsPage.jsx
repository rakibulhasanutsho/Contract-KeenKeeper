import React from 'react'
import { useLoaderData } from 'react-router'
import FriendDetails from '../../components/frienddetails/FriendDetails'

function FriendDetailsPage({}) {
  const friends = useLoaderData()
  
  return (
   <div className='w-[1140px] mx-auto'>
        {
          friends.map((friend, index) => <div key={index}>
            <FriendDetails friend={friend}></FriendDetails>
          </div>)
        }
   </div>
  )
}

export default FriendDetailsPage
