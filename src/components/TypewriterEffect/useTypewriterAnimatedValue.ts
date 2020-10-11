import { useState, useEffect, useMemo } from 'react'

/**
 * Returns an array of strings leading up to the given one, one character at a
 * time, starting with the empty string
 * 
 * @example
 * ```ts
 * explodeString('foo') // => ['', 'f', 'fo', 'foo']
 * ```
 *
 * @param str 
 */
function explodeString(str: string) {
  const length = str.length + 1
  return Array.from({ length })
    .map((_, idx) => str.substr(0, idx))
}

function flatMap<T, U>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => U[],
): U[] {
  return Array.prototype.concat(...array.map(callbackfn))
}

function randomDeltaAmount(base: number, delta: number) {
  return Math.random() * delta * base + base;
}

function useTypewriterAnimatedValue(strings: string[], {
  typingDelay = 125,
  typingDelayDelta = 0.25,
  delayAfterWord = 2000,
  delayAfterWordDelta = 0.01,
  clearingDelay = 100,
  clearingDelayDelta = 0.01,
  delayAfterClear = 500,
  delayAfterClearDelta = 0.01,
} = {}) {
  const actions = useMemo(() => flatMap(strings, (str) => {
    const writeUpValues = explodeString(str)
    const clearValues = [...writeUpValues].reverse().slice(1)
    return [
      ...flatMap(
        writeUpValues,
        value => [{ value }, { delay: randomDeltaAmount(typingDelay, typingDelayDelta)}]
      ),
      { delay: randomDeltaAmount(delayAfterWord, delayAfterWordDelta) },
      ...flatMap(
        clearValues,
        value => [{ value }, { delay: randomDeltaAmount(clearingDelay, clearingDelayDelta)}]
      ),
      { delay: randomDeltaAmount(delayAfterClear, delayAfterClearDelta) },
    ]
  }), [strings])

  const [nextActionIdx, setNextActionIdx] = useState(0)
  const [writtenValue, setWrittenValue] = useState('')

  useEffect(() => {
    const action = actions[nextActionIdx]
    const increaseNextActionId = () => setNextActionIdx((nextActionIdx + 1) % actions.length)
    if (action.value !== undefined) {
      const rafId = requestAnimationFrame(() => {
        setWrittenValue(action.value)
        increaseNextActionId()
      })
      return () => cancelAnimationFrame(rafId)
    } else if (action.delay !== undefined) {
      const timeoutId = setTimeout(increaseNextActionId, action.delay)
      return () => clearTimeout(timeoutId)
    }
  }, [nextActionIdx, setNextActionIdx, actions, writtenValue])

  return writtenValue
}

export default useTypewriterAnimatedValue