import React from 'react'

export default ({
  children,
  background,
  booting,
}: {
  children: React.ReactNode
  background?: string | null
  booting?: boolean
}) => (
  <>
    <div
      className={`
        background
        ${booting ? '' : 'bg-white'}
        md:bg-transparent
        md:opacity-50
        fixed
        w-full
        h-full
        left-0
        top-0
        bg-cover
        bg-center
      `}
      style={{ backgroundImage: background ? `url('${background}')` : 'none' }}
    ></div>
    <div
      className={`
        ${booting ? 'min-h-screen' : 'md:min-h-screen'}
        flex
        justify-center
        items-center
        flex-col
      `}
    >
      <div className="relative flex justify-center items-center h-full">
        {children}
      </div>
    </div>
  </>
)
