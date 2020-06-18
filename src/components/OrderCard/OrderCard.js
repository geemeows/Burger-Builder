import React from 'react'

import classes from './OrderCard.module.css'
export default ({ order }) => {
    const ingredients = []
    for (let ingredient in order.ingredients) {
        ingredients.push({
            name: ingredient,
            amount: order.ingredients[ingredient]
        })
    }
    const ingredientsElements = ingredients.map(({ name, amount }, index) => (
        <span 
            key={ index }
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                padding: '5px',
                border: '1px solid #ccc'
            }}>
                { name }: ({ amount })
        </span>
    ))
    return (
        <div className={classes.Order}>
            <p>Ingredients: { ingredientsElements }</p>
            <p>Total Price: <strong>${Number.parseFloat(order.price).toFixed(2)}</strong></p>
        </div>
    )
}
