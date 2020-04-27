import React, { Dispatch } from 'react'
import Arrow from './Arrow'

export default ({
  setCurrent,
  current,
  isNavigating,
}: {
  setCurrent: Dispatch<number>
  current: number
  isNavigating: boolean
}) => (
  <>
    {current > 0 && (
      <div
        className="flex flex-grow items-baseline cursor-pointer"
        tabIndex={0}
        onClick={() => setCurrent(current - 1)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' || e.keyCode === 13) {
            setCurrent(current - 1)
          }
        }}
      >
        <Arrow />
        <p className="flex-grow text-left">Wait, what was the previous one?</p>
      </div>
    )}
    {isNavigating && (
      <div
        className="flex flex-grow items-baseline cursor-pointer"
        tabIndex={0}
        onClick={() => setCurrent(current + 1)}
        onKeyUp={(e) => {
          if (e.key === 'Enter' || e.keyCode === 13) {
            setCurrent(current + 1)
          }
        }}
      >
        <p className="flex-grow text-right">Go back to the next one</p>
        <Arrow right />
      </div>
    )}
    </>
)
