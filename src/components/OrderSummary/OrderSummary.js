import React from 'react'

import Button from '@/components/Button/Button'
const OrderSummary = ({ ingredients, cancelBehavior, continueBehavior, price }) => {
    const ingredientsList = Object.keys(ingredients)
        .map(ingredient => (
            <li key={ingredient}>
                <span style={{ textTransform: 'capitalize'}}>{ingredient}</span>: {ingredients[ingredient]}
            </li>
        ))
    return (
        <React.Fragment>
            <h3>Your Order Summary</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientsList}
            </ul>
            <p>Your subtotal: <strong>{price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" behavior={cancelBehavior}>CANCEL</Button>
            <Button btnType="Success" behavior={continueBehavior}>CONTINUE</Button>
        </React.Fragment>
    )
}

export default OrderSummary