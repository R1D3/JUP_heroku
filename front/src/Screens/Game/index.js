import React, { useEffect } from 'react'
import { useStopwatch } from 'react-timer-hook'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { level, editorText, consigne, resultLogs, loading } from '../../Recoil/atom'
import { levelContentArray } from '../../Utils'
import { useWindowSize } from '../../Utils/useWindowSize'
import Logger from '../../Components/Logger'
import Timer from '../../Components/Timer'
import Button from '../../Components/Button'
import { create } from '../../Services/Api'
import { levelUp, lose, playMusic, success } from '../../Utils/sounds'
import Editor from '../../Components/Editor'
import Level from '../../Components/LevelStep'
import { UseHandleCtrlEnter } from '../../Utils/useHandleCtrlEnter'

const api = create()

const Game = ({ history }) => {
  useEffect(() => {
    start()
  }, [])
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause
  } = useStopwatch()

  const pathname = history.location.pathname.split('/')[1]
  useEffect(() => {
    playMusic(pathname, isRunning)
  }, [isRunning])

  const [_level, setLevel] = useRecoilState(level)
  const [text, setText] = useRecoilState(editorText)
  const [_consigne, setConsigne] = useRecoilState(consigne)
  const [_loading, setLoading] = useRecoilState(loading)
  useEffect(() => {
    // Update textEditor and consigne according to the level
    setText(levelContentArray[_level].placeholder)
    setConsigne(levelContentArray[_level].consigne)
  }, [_level])

  const isPressed = UseHandleCtrlEnter()
  useEffect(() => {
    if (isPressed === true) validateCode()
  }, [isPressed])

  const resetLevel = useResetRecoilState(level)
  const resetResulLogs = useResetRecoilState(resultLogs)
  const resetText = useResetRecoilState(editorText)
  const resetConsigne = useResetRecoilState(consigne)
  const resetAll = () => {
    // Reset all datas
    resetLevel()
    resetText()
    resetConsigne()
    resetResulLogs()
  }

  const _resultLogs = useRecoilValue(resultLogs)
  const setResultLogs = useSetRecoilState(resultLogs)
  const nextLevel = (__level) => {
    // Check if level is smaller than 4 (last level),
    // if that is the case, reset logs, set new level and resume timer
    // else, YOU FINISHED THE GAME ! go to the End Screen
    if (__level < 4) {
      setResultLogs([])
      setLevel(__level + 1)
      levelUp.play()
      start()
    } else {
      history.push({
        pathname: 'end',
        minutes: minutes,
        seconds: seconds,
        restart: resetAll
      })
    }
  }

  const validateCode = async () => {
    // First check if timer is Running and if we need to upgrade the level
    // then call api to testUserCode
    // if data.finish === true, it means you passed all tests for the current level,
    // then the timer is paused, at the next click you will go to the end screen
    // update results logs
    if (!isRunning) {
      nextLevel(_level)
      return
    }
    setLoading(true)
    const { data, status } = await api.testUserCode(_level, text)
    if (status !== 200) {
      setLoading(false)
      return
    } if (data.finish === true) {
      pause()
      success.play()
    } else if (data.error) {
      lose.play()
    }
    console.log(data)
    setResultLogs((oldResult) => [...oldResult, data])
    setLoading(false)
  }

  const { width, height } = useWindowSize()
  return (
    <div className='h-screen w-screen flex flex-col justify-evenly items-center bg-gray-800'>
      <div className='w-11/12 shadow-xl flex justify-between items-center bg-gray-700 p-3 rounded-xl'>
        <div className='h-full flex-1 flex flex-col justify-center items-left'>
          <p className='self-left font-serif font-bold text-base sm:text-xl md:text-2xl text-green-400'>
            YOU CAN'T
          </p>
          <p className='self-left font-serif font-bold text-base sm:text-xl md:text-2xl text-green-400'>
            JAVASCRIPT
          </p>
          <p className='self-left font-serif font-bold text-base sm:text-xl md:text-2xl text-green-400'>
            UNDER PRESSURE
          </p>
        </div>
        <Level level={_level} />
        <Timer
          minutes={minutes}
          seconds={seconds}
        />
      </div>
      <Editor
        setText={setText}
        text={text}
        width={width}
        height={height}
      />
      <div className='h-1/4 w-11/12 flex justify-between shadow-xl items-center bg-gray-700 rounded-xl p-3'>
        <Button
          onClick={validateCode}
          text='GO'
          disabled={_loading}
          className='shadow-xl h-full w-1/6 mr-5 flex rounded-xl focus:outline-none bg-green-400 hover:bg-green-500 justify-center
            items-center font-serif text-2xl sm:text-5xl md:text-7xl text-gray-800 font-bold slect-none'
        />
        <Logger
          resultLogs={_resultLogs}
          consigne={_consigne}
          finishString={_level < 4
            ? `SUCCESS! All tests passed. You've used ${minutes}:${seconds} so far. Well done!
              Click Go or hit Ctrl-Enter/⌘-Enter to move on to level ${_level + 2} !`
            : `YOU FINISHED THE GAME ! You've used ${minutes}:${seconds} so far. Well done!`}
        />
      </div>
    </div>
  )
}

export default Game
