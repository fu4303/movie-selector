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
  <div className="text-sm font-medium text-gray-500 flex justify-between mt-6">
    {current > 0 && (
      <div className="flex flex-grow items-baseline cursor-pointer">
        <Arrow />
        <p
          className="flex-grow text-left"
          onClick={() => setCurrent(current - 1)}
        >
          Wait, what was the previous one?
        </p>
      </div>
    )}
    {isNavigating && (
      <div className="flex flex-grow items-baseline cursor-pointer">
        <p
          className="flex-grow text-right"
          onClick={() => setCurrent(current + 1)}
        >
          Go back to the next one
        </p>
        <Arrow right />
      </div>
    )}
  </div>
)
