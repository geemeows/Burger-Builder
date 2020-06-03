import React from 'react'
import classes from './BuildControl.module.css'
const BuildControl = ({ label, moreFn, lessFn, disabled }) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{ label }</div>
            <button 
                className={classes.Less} 
                onClick={lessFn}
                disabled={disabled}>Less</button>
            <button 
                className={classes.More} 
                onClick={moreFn}>More</button>
        </div>
    )
}

export default BuildControl