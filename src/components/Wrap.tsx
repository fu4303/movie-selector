import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto px-5 sm:px-10 max-w-screen-lg">
    <div className="h-screen flex divide justify-center items-center flex-col">
      {children}
    </div>
  </div>
)
