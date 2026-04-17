import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router'
import AllFriends from '../friends/AllFriends'
import { GridLoader } from 'react-spinners'

function HomePageFriends({}) {
    const friends = useLoaderData()
    // const navigate = useNavigate()
    // console.log(friends)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(friends){
            setLoading(false)
        }
    },[friends])
  return (
    <div className='w-full space-y-5 md:w-[950px] lg:w-[1140px] mx-auto p-5 '>
        <h3 className='text-3xl font-bold mb-10'>Your Friends</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5'>
           {
                loading ? (
                    <div className=' flex justify-center py-20'>
                        <GridLoader color="#36d7b7" />
                    </div> ) :
                 (
                    
                friends.map((friend, index) => <Link  to={`/friendsdetails/${friend.id}`}  key={index} className=' mb-3 shadow-sm'>
                    <AllFriends friend={friend} ></AllFriends>
                </Link>
            )
            
                 )
           }

        </div>
      
    </div>
  )
}

export default HomePageFriends
