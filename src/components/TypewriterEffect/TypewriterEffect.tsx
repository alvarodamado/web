import React from 'react'
import styled from 'styled-components'
import Caret from './Caret'
import useTypewriterAnimatedValue from './useTypewriterAnimatedValue'

interface TypewriterEffectProps {
  className?: string
  strings: string[]
}

const StyledCaret = styled(Caret)`
  --color: var(--caret-color, var(--primary-text-color));
`

function TypewriterEffect(props: TypewriterEffectProps) {
  const writtenValue = useTypewriterAnimatedValue(props.strings)

  return (
    <span className={props.className}>
      {writtenValue}
      <StyledCaret />
    </span>
  )
}

export default TypewriterEffect