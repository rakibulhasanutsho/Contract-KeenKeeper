import React, { use, useContext, useState } from 'react'
import { RiTimerFlashLine } from "react-icons/ri";
import { RiArchiveLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdVideoCall } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { useParams } from 'react-router';
  import { ToastContainer, toast } from 'react-toastify';
import { FriendContext } from '../friendcontext/HistoryContext';

 


const friendPromise = fetch('/friends.json').then(res => res.json())

function FriendDetails() {

    const { addToHistory} = useContext(FriendContext)
    
    const friends = use(friendPromise)
    const { friendId } = useParams()
    const friend = friends?.find(friend => friend.id == friendId)
    const {
        name,
        picture,
        tags,
        days_since_contact,
        status,
        bio,
        email,
        goal,
        next_due_date,


    } = friend
    // addToHistory({name})

    const [callHistory, setCallHistory] = useState([]);

    const handleConnection = (type) => {
         addToHistory({name, type})
        if (type === 'Call') {
            const newEntry = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                type: "Call",
                name:name
            };
            toast.success(`Calling ${name}`)
            setCallHistory([newEntry, ...callHistory]);
        }
        else if (type === 'Massage') {
            const newEntry = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                type:"Massage",
                name:name
            };
            toast.success(`Massage sending ${name}`)
            setCallHistory([newEntry, ...callHistory]);
        }
        else if (type === 'Video') {
            const newEntry = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                type:"Video",
                name:name
            };
            toast.success(` Video Calling ${name}`)
            setCallHistory([newEntry, ...callHistory]);
        }
       
    }
        return (

            <div className='flex gap-10 my-10'>
                <div className='flex-1'>
                    <div className='shadow-sm text-center space-y-3 p-5'>
                        <img className='w-20 rounded-full mx-auto' src={picture} alt="" />
                        <p className={`text-white rounded-2xl px-2 p-1 font-medium w-25 mx-auto ${status === "Overdue" ? "bg-red-500" : status === 'On-Track' ? "bg-green-700" : "bg-amber-500"}`}>{status}</p>
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
                    <div className='my-5 space-y-3'>
                        <span className='flex gap-2 justify-center p-2 w-full shadow-sm'>
                            <RiTimerFlashLine className='my-auto'></RiTimerFlashLine>
                            <p className='font-semibold '>Snooze 2 Weeks</p>
                        </span>
                        <span className='flex gap-2 justify-center  p-2 w-full shadow-sm'>
                            <RiArchiveLine className='my-auto'></RiArchiveLine>
                            <p className='font-semibold '>Archive</p>
                        </span>
                        <span className='flex justify-center gap-2 p-2 w-full shadow-sm '>
                            <RiDeleteBin6Line className='my-auto'></RiDeleteBin6Line>
                            <p className='font-semibold text-red-400 '>Delete</p>
                        </span>


                    </div>
                </div>
                <div className='flex-2 space-y-5'>
                    <div className='flex justify-between'>
                        <div className='p-5 px-7 shadow-sm text-center rounded'>
                            <h3 className='text-3xl font-bold text-[#244D3F]'>{days_since_contact}</h3>
                            <p className='text-[#64748B]'>Days Since Contact</p>
                        </div>
                        <div className='p-5 shadow-sm text-center rounded'>
                            <h3 className='text-3xl font-bold text-[#244D3F]'>{goal}</h3>
                            <p className="text-[#64748B]">Goal (Days)</p>
                        </div>

                        <div className='p-5 shadow-sm text-center rounded'>
                            <h3 className='text-3xl font-bold text-[#244D3F]'>{next_due_date}</h3>
                            <p className='text-[#64748B]'> Next Due</p>
                        </div>
                    </div>
                    <div className='p-7 shadow-sm rounded-2xl'>
                        <div className='flex justify-between '>
                            <h4 className='text-2xl font-semibold    font-[#244D3F]'>Relationship Goal</h4>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='text-xl font-medium text-[#64748B]'>Connect every <span className='text-2xl font-medium text-black'>{goal} days</span></p>
                    </div>
                    <div className='p-7 shadow-sm rounded-2xl'>
                        <h4 className='text-xl font-bold font-[#244D3F] mb-5 '>Quick Check-In</h4>
                        <div className='flex  justify-between '>
                            <div onClick={() => handleConnection('Call')} className='p-7 px-15 shadow-sm border border-gray-400 bg-[#E9E9E9] rounded cursor-pointer'>

                                <LuPhoneCall className='mx-auto ' size={24} />
                                <p className='font-medium'>Call</p>

                            </div>
                            <div onClick={() => handleConnection('Massage')} className='p-7 px-15 shadow-sm border border-gray-400 bg-[#E9E9E9] rounded cursor-pointer'>
                                <MdOutlineTextsms className='mx-auto ' size={24}> </MdOutlineTextsms>
                                <p className='font-medium'>Massage</p>
                            </div>
                            <div onClick={() => handleConnection('Video')} className='p-7 px-15 shadow-sm border border-gray-400 bg-[#E9E9E9] rounded cursor-pointer'>
                                <MdVideoCall className='mx-auto' size={24}></MdVideoCall>
                                <p className='font-medium'> Video </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        {callHistory.length > 0 && <div className='flex justify-between'>
                            <h5 className='font-bold mb-2'>Call Log:</h5>
                            <div className='flex gap-1 btn'>
                                <MdHistory size={20} className='my-auto' />
                                <p>Full history</p>
                            </div>
                        </div>}
                        {callHistory.map(log => (
                            <div key={log.id} className='border-b border-gray-200 py-2 text-sm text-gray-600'>
                               {
                                log.type ==="Call" ? <div className='flex justify-between p-2 px-4'>
                                    <div className='flex gap-4'>
                                        <LuPhoneCall size={24} className='my-auto'></LuPhoneCall>
                                        <span>
                                            <p className='font-medium text-xl'>Text</p>
                                            <p className='text[#64748B]'>Asked for career advice</p>
                                        </span>
                                    </div>
                                    <p className='text-sm text-[#64748B] my-auto'>{log.time}</p>
                                </div> : 
                                log.type === "Massage" ?
                                 <div className='flex justify-between p-2 px-4'>
                                    <div className='flex gap-4'>
                                        <MdOutlineTextsms size={24} className='my-auto'></MdOutlineTextsms>
                                        <span>
                                            <p className='font-medium text-xl'>Meetup</p>
                                            <p className='text[#64748B]'>Industry conference meetup</p>
                                        </span>
                                    </div>
                                    <p className='text-sm text-[#64748B] my-auto'>{log.time}</p>
                                </div> :
                                 <div className='flex justify-between p-2 px-4'>
                                    <div className='flex gap-4'>
                                        <MdOutlineTextsms size={24} className='my-auto'></MdOutlineTextsms>
                                        <span>
                                            <p className='font-medium text-xl'>Video</p>
                                            <p className='text[#64748B]'>Asked for career advice</p>
                                        </span>
                                    </div>
                                    <p className='text-sm text-[#64748B] my-auto'>{log.time}</p>
                                </div>
                               }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    
}

export default FriendDetails
