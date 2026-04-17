import React, { useContext, useEffect, useState } from 'react'
import { FriendContext } from '../../components/friendcontext/HistoryContext'
import { FaHandshakeSimple } from "react-icons/fa6";
import { SiPanasonic } from 'react-icons/si';
import { LiaVideoSolid } from "react-icons/lia";
import { BsChatText } from "react-icons/bs";
import { Link, NavLink } from 'react-router';
import EmptyCallLog from '../../components/calllognotfound/CallLogNotFound';
import { RiArrowDropDownLine } from 'react-icons/ri';

function TimeLine() {
  const { allHistory, setAllHistory } = useContext(FriendContext)
  const [sortingType, setSortingType] = useState("")
  const [filterTimeline, setFilterTimeline] = useState(allHistory)
  
  

  useEffect(() => {
    if (sortingType === "Call") {
      const onlyCalls = allHistory.filter(history => history.type === "Call");
      setFilterTimeline(onlyCalls)
    }

    else if (sortingType === "Message") {
      const onlyCalls = allHistory.filter(history => history.type === "Message");
      setFilterTimeline(onlyCalls)
    }
    else if (sortingType === "Video") {
      const onlyCalls = allHistory.filter(history => history.type === "Video");
      setFilterTimeline(onlyCalls)
    }
  }, [sortingType, allHistory])

 

  return (
    <div className='w-[1140px] mx-auto my-20 '>
      <div className='space-y-5'>
        <h2 className='text-5xl font-bold'>Timeline</h2>
        <details className="dropdown flex gap-3">
         

            <summary className="btn  bg-green-800 px-5 text-white m-1"><span className='text-white'>Filter timeline</span></summary>
            <RiArrowDropDownLine />
         
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <NavLink   onClick={() => setSortingType("Call")}>Calls</NavLink>
            <NavLink onClick={() => setSortingType("Message")}>Messages</NavLink>
            <NavLink onClick={() => setSortingType("Video")}>Video calls</NavLink>
          </ul>
        </details>
        <div>
          {
            filterTimeline.length === 0 ?
              <div>
                <EmptyCallLog></EmptyCallLog>
              </div> :
              <div className='space-y-4 '>
                {
                  filterTimeline.map((history, index) => <div key={index} >
                    {history.type === "Call"
                      ?
                      <div className='flex gap-3 p-5 px-10 shadow-sm'>
                        <FaHandshakeSimple className='my-auto' size={24} />
                        <div>
                          <p><span className='font-semibold text-[#244D3F] text-xl'>Meetup</span> <span className='text-[#64748B]'>With {history.name}</span></p>
                          <p>{new Date(history.timestamp).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>
                      : history.type === "Message"

                        ?
                        <div className='flex gap-3 p-5 px-10 shadow-sm'>
                          <BsChatText className='my-auto' size={24} />
                          <div>
                            <p><span className='font-semibold text-[#244D3F] text-xl'>Text</span> <span className='text-[#64748B]'>With {history.name}</span></p>
                            <p>{new Date(history.timestamp).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                          </div>
                        </div>
                        : <div className='flex gap-3 p-5 px-10 shadow-sm'>
                          <LiaVideoSolid className='my-auto' size={24} />
                          <div className=''>
                            <p><span className='font-semibold text-[#244D3F] text-xl'>Video Call</span> <span className='text-[#64748B]'>With {history.name}</span></p>
                            <p>{new Date(history.timestamp).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                          </div>
                        </div>

                    }

                    <div>
                      <p>

                      </p>

                    </div>
                  </div>)
                }
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default TimeLine
