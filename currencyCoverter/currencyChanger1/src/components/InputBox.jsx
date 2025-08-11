import "tailwindcss";

import React from 'react'

function InputBox({
  label="from",amount,onAmountChange,onCurrencyChange,currencyOption=[],selectCurrency="usd",className="",
}) {
  return (
    <>
        <div className="max-w-sm mx-auto bg-gray-100 p-6 rounded-xl shadow-md space-y-4">
  {/* From Section */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label htmlFor="from-amount" className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
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
        <option value="usd">
          USD</option>
        <option value="inr">INR</option>
        {/* Add more currencies */}
      </select>
    </div>
  </div>

  

</div>

    </>
  )
}

export default InputBox