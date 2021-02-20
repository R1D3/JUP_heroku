import { getOutput } from './index.js'

export const test = async (userFn, fn, args, fnName) => {
  try {
    if (!userFn || !fn || !args || !fnName) {
      throw new Error('Something is really wrong in your code ...')
    }
    console.log(`TEST ${JSON.stringify(fnName)}`)
    const result = {
      logs: [],
      output: [],
      success: [],
      debug: [],
      error: '',
      finish: false
    }
    const fnToTest = await new Function('return ' + userFn)()
    let i = 0
    for (const arg of args) {
      result.logs.push(`Testing ${fnName} (${JSON.stringify(arg)})`)
      result.output.push(JSON.stringify(fnToTest(arg)))
      const debugLog = await getOutput(userFn, fnName, arg)
      result.debug.push(debugLog)
      if (fn(arg) === fnToTest(arg)) {
        result.success.push(`RIGHT! ${fnToTest(arg)} was the good answer !`)
        if (i === args.length - 1) {
          result.finish = true
          break
        }
      } else {
        result.error = `WRONG! Expected ${fn(arg)} but got ${fnToTest(arg)} !`
        break
      }
      i++
    }
    return result
  } catch (e) {
    return {
      logs: ['Internal Error'],
      output: [],
      debug: '',
      success: [],
      finish: false,
      error: e.message
    }
  }
}
