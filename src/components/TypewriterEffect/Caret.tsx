import React, { useRef, useState } from "react"
import styled from "styled-components"
import useDebounce from "./useDebounce"
import useParentMutationObserver from "./useParentMutationObserver"

const BlinkingCaret = styled.span<{ blink: boolean }>`
  --color: #333;

  @keyframes blink {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  animation: blink 1s steps(2) infinite;
  animation-fill-mode: forwards;
  animation-name: ${props => props.blink ? 'blink' : 'none'};

  border-right: 1px solid var(--color);
  margin-left: 2px;
`

interface CaretProps {
  className?: string
}

function Caret(props: CaretProps) {
  const [lastMutation, setLastMutation] = useState(Date.now())
  const debouncedMutation = useDebounce(lastMutation, 250)
  const ref = useRef<HTMLElement>()
  useParentMutationObserver(ref, () => { setLastMutation(Date.now()) })

  return <BlinkingCaret className={props.className} ref={ref} blink={debouncedMutation === lastMutation} />
}

export default React.memo(Caret)