import React, { useEffect } from 'react'
import Button from '../../Components/Button'
import { motion } from 'framer-motion'
import { useResetRecoilState } from 'recoil'
import { level, editorText, consigne, resultLogs } from '../../Recoil/atom'
import { playMusic } from '../../Utils/sounds'
import { pageVariants } from '../../Utils'

const Home = ({ history }) => {
  const resetLevel = useResetRecoilState(level)
  const resetResulLogs = useResetRecoilState(resultLogs)
  const resetText = useResetRecoilState(editorText)
  const resetConsigne = useResetRecoilState(consigne)
  const pathname = history.location.pathname.split('/')[1]
  useEffect(() => {
    resetResulLogs()
    resetText()
    resetConsigne()
    resetLevel()
    playMusic(pathname, true)
  }, [])

  return (
    <div className='bg-gray-800 flex'>
      <motion.div
        className='h-screen w-screen flex flex-col justify-center items-center bg-gray-800 p-2'
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
          <p className='font-bold text-5xl font-serif sm:text-7xl md:text-8xl lg:text-9xl text-green-400'>
            YOU CAN'T
          </p>
          <p className='font-bold text-5xl font-serif sm:text-7xl md:text-8xl lg:text-9xl text-green-400'>
            JAVASCRIPT
          </p>
          <p className='font-bold text-5xl font-serif sm:text-7xl md:text-8xl lg:text-9xl text-green-400'>
            UNDER PRESSURE
          </p>
        </motion.div>
        <motion.div
          className='flex flex-row justify-center self-center my-10'
          whileHover={{ scale: 1.1 }}
        >
          <p className='self-center font-serif font-normal text-xs sm:text-xl md:text-2xl lg:text-4xl text-green-400'>
            {'Five functions to fill, One ticking clock.\u00a0'}
          </p>
          <p className='self-center font-serif font-bold text-xs sm:text-xl md:text-2xl lg:text-4xl text-green-400 '>
            How fast can you code?
          </p>
        </motion.div>
        <Button
          onClick={history}
          args='game'
          text='Start Game'
          className='h-1/6 w-3/5 font-serif focus:outline-none bg-green-400 hover:bg-green-500
            rounded-xl text-3xl sm:text-5xl md:text-7xl text-gray-800 font-bold shadow-2xl'
        />
      </motion.div>
    </div>
  )
}

export default Home
