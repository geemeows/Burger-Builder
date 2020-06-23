import React from 'react'

import classes from './Button.module.css'
const Button = ({ children, btnType, behavior, disabled }) => (
    <button
        disabled={disabled} 
        className={[classes.Button, classes[btnType]].join(' ')}
        onClick={behavior}
    >
            {children}
    </button>
)

export default Button