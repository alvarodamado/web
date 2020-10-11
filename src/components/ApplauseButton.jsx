import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { rhythm } from "../utils/typography"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--accent-color-1);

  .count {
    color: inherit;
  }

  applause-button {
    margin-right: ${rhythm(0.2)};
    &:not(.clapped):hover {
      opacity: 0.5;
    }

    .style-root {
      &:after {
        display: none;
      }

      .shockwave, .count-container {
        display: none;
      }

      svg {
        margin: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
  
`

function ApplauseButton(props) {
  /** @type {HTMLElement|undefined} */
  const ref = useRef(null)
  const [count, setCount] = useState('-')

  useEffect(() => {
    if (!ref.current) {
      return
    }

    /** @type {HTMLElement} */
    const count = ref.current.querySelector('.count');
    
    if (!count) {
      return
    }

    const observer = new MutationObserver(() => {
      setCount(count.innerText)
    });
    
    observer.observe(count, { subtree: true, childList: true });
    return () => { observer.disconnect() }
  }, [ref, setCount])

  return (
    <Wrapper>
      <applause-button
        ref={ref}
        style={{ width: '24px', height: '24px' }}
        color="var(--accent-color-1)"
      />
      <span className="count">{count}</span>
    </Wrapper>
  )
}

export default ApplauseButton
