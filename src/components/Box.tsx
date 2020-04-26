import React from 'react'

export default ({ children }: {children: React.ReactNode }) => (
  <div
    className={`
      md:rounded-lg
      bg-white
      md:shadow-2xl
      pb-12
      pt-5
      md:pt-12
      px-5
      md:px-12
      text-gray-800
      max-w-3xl
    `}
  >
    {children}
  </div>
)
