import React from 'react'

const Timer = ({
  seconds,
  minutes
}) => {
  return (
    <div className='font-sans flex-1 text-2xl sm:text-5xl justify-center md:text-7xl lg:text-8xl text-right text-green-400 mr-5'>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  )
}
export default Timer
