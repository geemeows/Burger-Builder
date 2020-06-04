import React from 'react'

import classes from './Backdrop.module.css'
const Backdrop = ({ show, closeModal }) => {
    return (
        show ? 
            <div className={classes.Backdrop} onClick={closeModal}></div> : null
    )
}

export default Backdrop