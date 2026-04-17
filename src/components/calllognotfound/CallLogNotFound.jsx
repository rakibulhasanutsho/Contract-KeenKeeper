import React from 'react';
import { MdPhoneDisabled, MdAdd } from 'react-icons/md';
import { Link } from 'react-router';

const EmptyCallLog = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center  p-6 text-center bg-gray-50 rounded-3xl">
      {/* Icon Container */}
      <div className="relative mb-6">
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 scale-150" />
        
        {/* Icon Card */}
        <div className="relative flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
          <MdPhoneDisabled className="text-gray-400 text-4xl" />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-semibold text-gray-900">
        No calls or messages
      </h3>
      <p className="mt-2 text-sm text-gray-500 mx-auto leading-relaxed">
        Your recent activity will appear here once you start reaching out to friends.
      </p>

      {/* Action Button */}
      <Link to="/"
        className="mt-8 flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all active:scale-95 shadow-md shadow-blue-200"
        
      >
        <MdAdd className="text-lg" />
        <span>Start a conversation</span>
      </Link>
    </div>
  );
};

export default EmptyCallLog;