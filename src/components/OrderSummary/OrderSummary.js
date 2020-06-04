import React from 'react'

const OrderSummary = ({ ingredients }) => {
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
            <p>Continue to checkout?</p>
        </React.Fragment>
    )
}

export default OrderSummary