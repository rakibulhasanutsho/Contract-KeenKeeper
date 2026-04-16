import React, { useContext } from 'react'
import { Legend, Pie, PieChart } from 'recharts'
import { FriendContext } from '../../components/friendcontext/HistoryContext'

function StatusPage() {
  const {allHistory} = useContext(FriendContext)
  let totalCall = 0
  let totalMassage = 0
  let totalVideo = 0
  allHistory.map(history =>
  {
    if(history.type === "Call"){
     totalCall= totalCall +1
    }
    else if(history.type === "Massage"){
     totalMassage= totalMassage + 1
    }
    else if (history.type=== "Video"){
      totalVideo = totalVideo +1
    }
  }
 
  )
   console.log("Call", totalCall)
   console.log("Massage", totalMassage)
   console.log("Video", totalVideo)
  const data = [
  { name: 'Calls', value: totalCall, fill: '#0088FE' },
  { name: 'Massages', value: totalMassage, fill: '#00C49F' },
  { name: 'videos', value: totalVideo, fill: '#FFBB28' },
  
];
  return (
    <div className='bg-[#F8FAFC]'>
      <div className='w-[1140px] mx-auto p-10'>
        <h1 className=' text-5xl font-bold text-green-800'>Friendship Analytics</h1>
        {
          allHistory.length === 0 ? 
          <div className='min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-10'>
        <div className='text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-100 max-w-lg'>
          {/* Ekhan ekti image ba icon dite paren */}
          <div className='text-6xl mb-4'>📊</div> 
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>No History Found</h1>
          <p className='text-gray-500 mb-6'>
            Apnar friendship analytics dekharnor moto kono data ekhon o nei. 
            Bondhuder sathe kotha bolun ebong history create korun!
          </p>
          <button 
            onClick={() => window.history.back()} 
            className='bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all'
          >
            Go Back
          </button>
        </div>
      </div> :
      <div className=' flex justify-center flex-col items-center    my-10 bg-white w-[1140px] mx-auto  rounded p-15  '>
          <h4 className='text-xl font-medium text-wrap '>By Interaction Type</h4>
          <PieChart className='mt-20' style={{ width: '100%', maxWidth: '600px', maxHeight: '100vh', aspectRatio: 1 }} responsive>
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              margin=  "auto"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
            isAnimationActive={true}
            />
            <Legend className='pt-10'></Legend>
          </PieChart>

        </div>
        }
      </div>
    </div>
  )
}

export default StatusPage
