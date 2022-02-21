import React, { useState } from 'react'

export default function EmailTextInput() {

    const [email, setEmail] = useState('')

    const handleChange = (event) => { 
        setEmail(event.target.value)
    } // target event property returns the element that triggers the event
    //The target property gets the element on which the event originally occurred

    // const handleChange = ({target}) => {setEmail(target.value)} 
    // // can re-write with object destructuring

    return (
        <input value={email} onChange={handleChange} />
    );
}