import React from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-green-900 p-5 md:p-20 space-y-5'>
      <div className='text-center space-y-6'>
            <h1 className='text-4xl md:text-6xl text-white font-bold'>KeenKeeper</h1>
            <p className='text-[16px] text-white '>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div>
                <h3 className='text-2xl font-semibold text-white mb-4'>Social Links</h3>
                <div className='flex gap-4 justify-center text-white'>
                    <FaInstagram></FaInstagram>
                    <FaFacebook></FaFacebook>
                    <FaYoutube></FaYoutube>
                </div>
            </div>
      </div>
      <hr className='border border-gray-200' />
      <div className=' flex flex-col md:flex-row justify-between text-white'>
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className='flex gap-5'>
            <p>Privacy Policy  </p>
            <p>Terms of Service</p>
            <p>Cookies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
