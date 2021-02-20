import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const Logger = ({ resultLogs, consigne, finishString }) => {
  const bottomRef = useRef()
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  useEffect(() => {
    // go down in the Logger when new logs are coming
    scrollToBottom()
  }, [resultLogs])

  return (
    <div className='ml-3 h-full flex-1 overflow-y-scroll'>
      <p className='bg-green-400 shadow-xl font-mono text-sm sm:text-xl md:text-3xl p-2 rounded-md mb-3'>
        {consigne}
      </p>
      {
        resultLogs.length > 0 && resultLogs.map((result, i) => { // map array logs
          return (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 0.9 }}
              className='flex flex-col justify-center'
              key={i}
            >
              {
                result && result.logs.length > 0 && result.logs.map((item, j) => { // map item log ,print testing logs and success logs
                  return (
                    <div key={j} className='flex flex-col justify-center'>
                      <p className='bg-green-400 shadow-xl font-mono text-sm sm:text-xl md:text-3xl p-2 rounded-md mt-3 mb-3'>
                        {item}
                      </p>
                      {
                        result.debug[j] &&
                        <p className='bg-blue-300 shadow-xl font-mono text-sm sm:text-xl md:text-3xl p-2 rounded-md mt-3 mb-3'>
                          {`debug => ${result.debug[j]}`}
                        </p>
                      }
                      {
                        result.output[j] &&
                        <p className='bg-blue-300 shadow-xl font-mono text-sm sm:text-xl md:text-3xl p-2 rounded-md mt-3 mb-3'>
                          {`output => ${result.output[j]}`}
                        </p>
                      }
                      {
                        result.success[j]
                          ? <p className='bg-green-600 shadow-xl font-mono text-sm sm:text-xl md:text-3xl p-2 rounded-md mb-3'>
                              {result.success[j]}
                            </p>
                          : result.error && // print error
                            <p className='bg-red-500 shadow-xl font-mono text-sm sm:text-xl md:text-3xl rounded-md mb-3 p-2'>
                              {result.error}
                            </p>
                      }
                    </div>
                  )
                })
              }
              {
                result.finish === true && // print finished level
                  <p className='bg-green-100 shadow-xl text-green-600 font-serif text-sm sm:text-xl md:text-3xl rounded-md p-10'>
                    {finishString}
                  </p>
              }
            </motion.div>
          )
        })
      }
      <div ref={bottomRef} />
    </div>
  )
}

export default Logger
