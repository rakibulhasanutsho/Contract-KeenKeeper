import { FaPlus } from "react-icons/fa6"

function HomePageBanner() {
  return (
    <div className='space-y-6 text-center p-10 '>
        <h1 className='text-4xl font-bold '>Friends to keep close to your life</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate <br /> corporis saepe. Necessitatibus similique recusandae Lorem, ipsum dolor.!</p>
        <button className='btn bg-green-900 text-white'>
            <div className="flex gap-2">
                <FaPlus className="my-auto"></FaPlus>
                <p>Add friend</p>
            </div>
        </button>
    </div>
  )
}

export default HomePageBanner
