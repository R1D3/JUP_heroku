import { useEffect, useState } from 'react'

export const UseHandleCtrlEnter = () => {
  const [isPressed, setisPressed] = useState(false)
  useEffect(() => {
    function onKeyup (e) {
      setisPressed(false)
      if ((e.key === 'Enter' && e.ctrlKey === true) || (e.key === 'Enter' && e.metaKey === true)) {
        setisPressed(true)
      }
    }
    window.addEventListener('keyup', onKeyup)
    return () => {
      window.removeEventListener('keyup', onKeyup)
    }
  }, [])
  return isPressed
}
