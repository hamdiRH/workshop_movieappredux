import React from 'react'

const rate = ({ count, onchange = () => { } }) => {
    let arr = []
    for (let i = 0; i < 5; i++) {
        if (i < count)
            arr = [...arr, <span onClick={() => onchange(i + 1)} style={{ color: 'red', fontSize: '24px' }}>♥</span>]
        else
            arr = [...arr, <span onClick={() => onchange(i + 1)} style={{ color: 'black', fontSize: '24px' }}>♥</span>]

    }
    return arr
}

export default rate
