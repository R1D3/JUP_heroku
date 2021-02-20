import { atom } from 'recoil'

export const level = atom({
  key: 'level',
  default: 0
})

export const loading = atom({
  key: 'loading',
  default: false
})

export const consigne = atom({
  key: 'consigne',
  default: ''
})

export const editorText = atom({
  key: 'editorText',
  default: ''
})

export const resultLogs = atom({
  key: 'resultToTest',
  default: []
})
