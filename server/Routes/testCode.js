import express from 'express'
import { getArgsAndFunctionAccordingToLevel } from '../Utils/index.js'
import { test } from '../Utils/test.js'
import regeneratorRuntime from "regenerator-runtime"

const router = express.Router()

router.post('/test', async (req, res, next) => {
  try {
    const { level, text } = req.body
    const { fn, args, fnName } = getArgsAndFunctionAccordingToLevel[level]
    const result = await test(text, fn, args, fnName)
    res.status(200).send(result)
  } catch (e) {
    console.log(e)
  }
})

export default router
