import React, { useEffect, useRef, useState } from 'react'

const PreviousValue = () => {
    const[value, setValue] = useState<string>("");
    const inputRef = useRef<string>("");
    
    console.log("Pre Render")

    useEffect(()=>{
        inputRef.current = value
    },[value])

    return (
        <div>
        <input type='text' onChange={(e)=>setValue(e.target.value)}/>
        <p>Current: {value}</p>
        <p>Previous : {inputRef.current}</p>
        </div>
    )
}

export default PreviousValue
