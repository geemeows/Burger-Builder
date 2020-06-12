import React, { Component } from 'react'
import Backdrop from '@/components/Backdrop/Backdrop'

import classes from './Modal.module.css'
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children
    }
    componentDidUpdate() {
        console.log('[Modal.js] ModalDidUpdate')
    }
    render () {
        const { children, show, closeSummary } = this.props
        return (
            <React.Fragment>
                <Backdrop show={show} dismiss={closeSummary}/>
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
}

export default Modal