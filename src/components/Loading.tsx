import React from 'react'

export default ({ size, slow }: { size: number; slow?: boolean }) => (
  <svg
    className={`${slow ? 'loading-slow' : 'loading'}`}
    height={size}
    viewBox="0 0 32 32"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m16 0v4c-6.627417 0-12 5.372583-12 12s5.372583 12 12 12v4c-8.836556 0-16-7.163444-16-16s7.163444-16 16-16z"
      fill="white"
    />
  </svg>
)
