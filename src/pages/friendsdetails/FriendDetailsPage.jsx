import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import FriendDetails from '../../components/frienddetails/FriendDetails'

function FriendDetailsPage({}) {
  const friends = useLoaderData()
  const {friendId} = useParams()
  
  return (
   <div className='w-full md:[950px] lg:w-[1140px] mx-auto'>
        <div>
            <FriendDetails friends={friends} friendId={friendId} ></FriendDetails>
          </div>
        
   </div>
  )
}

export default FriendDetailsPage
