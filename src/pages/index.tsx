import React, { useEffect } from 'react'
import Wrap from '../components/Wrap'
import Loading from '../components/Loading'

export default () => {
  useEffect(() => {
    ;(async () => {})()
  }, [])

  return (
    <Wrap>
      <div className="relative flex justify-center items-center">
        <div className="absolute">
          <Loading size={64} slow />
        </div>
        <div className="absolute">
          <Loading size={32} />
        </div>
      </div>
    </Wrap>
  )
}
