import React from 'react'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-5">
      {/* Visual Element */}
      <div className="relative">
        <h1 className="text-[12rem] font-extrabold text-gray-100 select-none">
          404
        </h1>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-green-700 whitespace-nowrap">
          Oops! Page Not Found
        </p>
      </div>

      {/* Message */}
      <div className="text-center mt-8 max-w-md">
        <p className="text-gray-600 text-lg mb-8">
          Apni jeti khujchen seta hoyto hariye geche ba move kora hoyeche. 
          Nicher button-e click kore home page-e fire jan.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all shadow-lg shadow-green-200"
          >
            Back to Home
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="fixed top-[-10%] right-[-10%] w-96 h-96 bg-green-50 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10" />
    </div>
  )
}

export default NotFoundPage
