import React from 'react'

export default ({ children }: {children: React.ReactNode }) => (
  <div
    className={`
      sm:rounded-lg
      bg-white
      sm:shadow-2xl
      p-5
      sm:p-12
      text-gray-800
      max-w-3xl
    `}
  >
    {children}
  </div>
)
