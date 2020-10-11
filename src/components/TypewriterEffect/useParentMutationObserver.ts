import { MutableRefObject, useRef, useEffect } from 'react'

function useParentMutationObserver(
  ref: MutableRefObject<HTMLElement>,
  mutationCallback: MutationCallback,
  mutationObserverConfig: MutationObserverInit = { characterData: true, subtree: true },
) {
  const parentElementRef = useRef<HTMLElement>(null)
  useEffect(() => {
    parentElementRef.current = ref.current?.parentElement || null
  }, [ref.current])

  useEffect(() => {
    const observer = new MutationObserver(mutationCallback)
    observer.observe(parentElementRef.current, mutationObserverConfig)
    return () => { observer.disconnect() }
  }, [parentElementRef.current])
}

export default useParentMutationObserver