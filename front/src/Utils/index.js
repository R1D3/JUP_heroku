import { isEven, getExtension, arraySum, longestString, doubleIt } from './placeholders'
import { _isEven, _getExtension, _arraySum, _longestString, _doubleIt } from './consignes'

export const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1,
    transition: {
      x: 0,
      type: 'spring',
      mass: 0.4,
      damping: 8
    }
  },
  out: {
    opacity: 0,
    transition: {
      ease: 'easeInOut'
    }
  }
}

export const levelContentArray = [
  {
    title: 'doubleIt',
    placeholder: doubleIt,
    consigne: _doubleIt
  },
  {
    title: 'isEven',
    placeholder: isEven,
    consigne: _isEven
  },
  {
    title: 'getExtension',
    placeholder: getExtension,
    consigne: _getExtension
  },
  {
    title: 'longestString',
    placeholder: longestString,
    consigne: _longestString
  },
  {
    name: 'arraySum',
    placeholder: arraySum,
    consigne: _arraySum
  }
]
