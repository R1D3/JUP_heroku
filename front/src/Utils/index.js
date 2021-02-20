import { isEven, getExtension, arraySum, longestString, doubleIt } from './placeholders'
import { _isEven, _getExtension, _arraySum, _longestString, _doubleIt } from './consignes'

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
