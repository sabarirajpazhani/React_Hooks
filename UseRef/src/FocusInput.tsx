import React, { useRef } from 'react'

const FocusInput = () => {
      const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} placeholder="Type..." />
      <button onClick={() => inputRef.current?.focus()}>
        Focus input
      </button>
    </div>
  )
}

export default FocusInput
