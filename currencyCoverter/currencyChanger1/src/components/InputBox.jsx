import "tailwindcss";

import React from 'react'

function InputBox() {
  return (
    <>
        <div className="max-w-sm mx-auto bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
  {/* From Section */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label htmlFor="from-amount" className="block text-sm font-medium text-gray-700 mb-1">From</label>
      <input
        type="number"
        id="from-amount"
        defaultValue={0}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="flex-1">
      <label htmlFor="from-currency" className="block text-sm font-medium text-gray-700 mb-1">Currency Type</label>
      <select
        id="from-currency"
        defaultValue="usd"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        {/* Add more currencies */}
      </select>
    </div>
  </div>

  {/* Swap Button */}
  <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
    Swap
  </button>

  {/* To Section */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label htmlFor="to-amount" className="block text-sm font-medium text-gray-700 mb-1">To</label>
      <input
        type="number"
        id="to-amount"
        defaultValue={0}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="flex-1">
      <label htmlFor="to-currency" className="block text-sm font-medium text-gray-700 mb-1">Currency Type</label>
      <select
        id="to-currency"
        defaultValue="inr"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        {/* Add more currencies */}
      </select>
    </div>
  </div>

  {/* Convert Button */}
  <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
    Convert USD to INR
  </button>
</div>

    </>
  )
}

export default InputBox