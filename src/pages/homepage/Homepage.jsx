import React from 'react'
import HomePageBanner from '../../components/homepagecomponent/HomePageBanner'
import HomePageGoals from '../../components/homepagecomponent/HomePageGoals'
import HomePageFriends from '../../components/homepagecomponent/HomePageFriends'
import { useLoaderData } from 'react-router'

function Homepage() {
    
  return (
    <div className='space-y-15'>
      <HomePageBanner></HomePageBanner>
      <HomePageGoals></HomePageGoals>
      <HomePageFriends></HomePageFriends>
    </div>
  )
}

export default Homepage
