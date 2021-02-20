import React, { useEffect } from 'react'
import Button from '../../Components/Button'
import { motion } from 'framer-motion'
import { playMusic } from '../../Utils/sounds'
import { pageVariants } from '../../Utils'

const End = ({ history, location }) => {
  const pathname = history.location.pathname.split('/')[1]
  useEffect(() => {
    playMusic(pathname, true)
  }, [])

  const { minutes, seconds, restart } = location
  if (!restart) {
    // go home if restart is undefined
    history.push('home')
  } const restartGame = () => {
    // restart all datas to restart the game
    restart()
    history.push('home')
  }
  return (
    <div className='bg-gray-800 flex'>
      <motion.div
        className='h-screen w-screen flex flex-col justify-center items-center bg-gray-800'
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: [1, 0.9, 1, 0.9, 1, 0.9, 1] }}
          transition={{ duration: 30, repeatType: 'loop' }}
          className='flex flex-col justify-center self-center m-10 text-center'
        >
          <p className='font-bold font-serif text-5xl sm:text-7xl md:text-8xl lg:text-8xl text-green-400'>
            NOW
          </p>
          <p className='font-bold font-serif text-5xl sm:text-7xl md:text-8xl lg:text-8xl text-green-400'>
            YOU CAN
          </p>
          <p className='font-bold font-serif text-5xl sm:text-7xl md:text-8xl lg:text-8xl text-green-400'>
            JAVASCRIPT
          </p>
          <p className='font-bold font-serif text-5xl sm:text-7xl md:text-8xl lg:text-8xl text-green-400'>
            UNDER PRESSURE
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='flex flex-row justify-center self-center my-10'
        >
          <p className='font-serif self-center font-normal text-sm sm:text-xl  md:text-2xl lg:text-4xl text-green-400'>
            {`${minutes} minutes, ${seconds} seconds for all 5 levels. Well done !`}
          </p>
        </motion.div>
        <Button
          onClick={restartGame}
          text='Again'
          className='h-1/6 w-3/5 shadow-xl font-serif bg-green-400 hover:bg-green-500 focus:outline-none rounded-xl text-3xl sm:text-5xl md:text-7xl text-gray-800 font-bold'
        />
      </motion.div>
    </div>
  )
}

export default End
