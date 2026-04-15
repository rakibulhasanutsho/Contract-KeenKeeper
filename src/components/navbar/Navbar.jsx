import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { NavLink } from 'react-router'
import { FaTimeline } from 'react-icons/fa6'
import { MdOutlineQueryStats } from "react-icons/md";

function Navbar() {
    const links =(
        <>
       <NavLink className={({ isActive }) => `font-semibold rounded-xl   bg-none mr-3 p-2 px-4 ${isActive ? "bg-green-900 text-white " : ""}`} to={"/"} >
        <div className='flex gap-1'>
            <IoHomeOutline className='my-auto font-bold' />
            <p >Home</p>
        </div>
        
        </NavLink>
       <NavLink className={({ isActive }) => `font-semibold rounded-xl   bg-none mr-3 p-2 px-4 ${isActive ? "bg-green-900 text-white " : ""}`} to={"/timeline"}>
         <div className='flex gap-1'>
            <FaTimeline className='my-auto font-bold'></FaTimeline>
            <p>Timeline</p>
        </div>
       </NavLink>
       <NavLink className={({ isActive }) => `font-semibold rounded-xl   bg-none mr-3 p-2 px-4 ${isActive ? "bg-green-900 text-white " : ""}`} to={"/statspage"}>
         <div className='flex gap-1'>
            <MdOutlineQueryStats className='my-auto font-bold'></MdOutlineQueryStats>
            <p>Stats</p>
        </div>
       </NavLink>
        </>
    )
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="text-3xl "><span className='font-bold text-green-900'>Keen</span>Keeper</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  
</div>
  )
}


export default Navbar
