import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const BuildControls = ({ addIngredient, removeIngredient, disableInfo, price, purchasable }) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
            { controls.map(ctrl => 
                <BuildControl 
                    key={ctrl.type} 
                    label={ctrl.label}
                    moreFn={() => addIngredient(ctrl.type)}
                    lessFn={() => removeIngredient(ctrl.type)}
                    disabled={disableInfo[ctrl.type]}
                    />
            )}
            <button 
                className={classes.OrderButton}
                disabled={!purchasable}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls