import React from 'react'

export default ({ children }: {children: React.ReactNode }) => (
  <div
    className={`
      rounded-lg
      bg-white
      shadow-2xl
      p-12
      text-gray-800
      max-w-3xl
    `}
  >
    {children}
  </div>
)
