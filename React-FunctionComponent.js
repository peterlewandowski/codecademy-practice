import React, { useState } from 'react';

function Toggle() {
    const[toggle, setToggle] = useState();

    return (
        <div>
            <p>The toggle is {toggle}</p>
            <button onClick={() => setToggle('On')}>On</button>
            <button onClick={() => setToggle('Off')}>Off</button>
        </div>
    );
}