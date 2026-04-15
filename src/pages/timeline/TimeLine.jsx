import React, { useContext } from 'react'
import { FriendContext } from '../../components/friendcontext/HistoryContext'
import { FaHandshakeSimple } from "react-icons/fa6";
import { SiPanasonic } from 'react-icons/si';
import { LiaVideoSolid } from "react-icons/lia";
import { BsChatText } from "react-icons/bs";

function TimeLine() {
  const { allHistory, setAllHistory, name, type } = useContext(FriendContext)
  console.log("hi", allHistory, setAllHistory)
  return (
    <div className='w-[1140px] mx-auto mt-20'>
      <div>
        <h2 className='text-5xl font-bold'>Timeline</h2>
        <button></button>
        <div className='space-y-4 '>
          {
            allHistory.map((history, index) => <div >
                {history.type=== "Call"
                    ?
                    <div className='flex gap-3 p-5 px-10 shadow-sm'>
                      <FaHandshakeSimple className='my-auto' size={24} />
                      <div>
                        <p><span className='font-semibold text-[#244D3F] text-xl'>Meetup</span> <span className='text-[#64748B]'>With {history.name}</span></p>
                        <p></p>
                      </div>
                    </div>
                    : history.type === "Message"

                      ? 
                     <div className='flex gap-3 p-5 px-10 shadow-sm'>
                      <BsChatText className='my-auto' size={24} />
                       <div>
                        <p><span className='font-semibold text-[#244D3F] text-xl'>Text</span> <span className='text-[#64748B]'>With {history.name}</span></p>
                        <p></p>
                       </div>
                     </div>
                      : <div className='flex gap-3 p-5 px-10 shadow-sm'>
                        <LiaVideoSolid className='my-auto' size={24} />
                        <p><span className='font-semibold text-[#244D3F] text-xl'>Video Call</span> <span className='text-[#64748B]'>With {history.name}</span></p>
                        <p></p>
                      </div>
                     
                }
              
              <div>
                <p>
                  
                </p>

              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default TimeLine
