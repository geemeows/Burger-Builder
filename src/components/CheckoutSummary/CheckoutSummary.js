import React from 'react'

import Burger from '@/components/Burger/Burger'
import Button from '@/components/Button/Button'

import classes from './ChcekoutSummary.module.css'
const CheckoutSummary = ({ ingredients }) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taste well!!</h1>
            <div 
                style={{
                    width: '100%',
                    margin: 'auto'
                }}>
                <Burger ingredients={ingredients} />
            </div>
            <Button btnType="Danger" behavior={() => {}}>CANCEL</Button>
            <Button btnType="Success" behavior={() => {}}>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary