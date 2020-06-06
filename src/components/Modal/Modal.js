import React from 'react'
import Backdrop from '@/components/Backdrop/Backdrop'

import classes from './Modal.module.css'
const Modal = ({ children, show, closeSummary }) => {
    return (
        <React.Fragment>
            <Backdrop show={show} closeModal={closeSummary}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}> 
                {children}
            </div>
        </React.Fragment>
    )
}

export default Modal