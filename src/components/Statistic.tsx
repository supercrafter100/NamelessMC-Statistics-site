import React from 'react'

const Statistic = ({ name, value }: { name: string, value: number }) => {
  return (
    <div className="bg-white rounded-xl p-4 col-span-4 md:col-span-1">
        <span className="text-gray-500 text-sm">{name}</span>
        <h1 className="font-bold text-3xl">{value}</h1>
    </div>
  )
}

export default Statistic