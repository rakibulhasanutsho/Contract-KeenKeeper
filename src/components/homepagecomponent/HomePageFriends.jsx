import React from 'react'
import { useLoaderData } from 'react-router'
import AllFriends from '../friends/AllFriends'

function HomePageFriends() {
    const friends = useLoaderData()
    console.log(friends)

  return (
    <div className='w-[1140px] mx-auto p-5'>
        <h3 className='text-3xl font-bold mb-10'>Your Friends</h3>
        <div className='grid grid-cols-4 gap-5'>
            {
                friends.map((friend, index) => <div key={index} className=' p-5 shadow-sm'>
                    <AllFriends friend={friend} ></AllFriends>
                </div>
            )
            }

        </div>
      
    </div>
  )
}

export default HomePageFriends
