import React from 'react'

export default ({
  children,
  background,
}: {
  children: React.ReactNode
  background?: string | null
}) => (
  <>
    <div
      className="opacity-50 fixed w-full h-full left-0 top-0 bg-cover bg-center"
      style={{ backgroundImage: background ? `url('${background}')` : 'none' }}
    ></div>
    <div className="min-h-screen flex justify-center items-center flex-col">
      <div className="relative flex justify-center items-center">
        {children}
      </div>
    </div>
  </>
)
