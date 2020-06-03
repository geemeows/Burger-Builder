import React from 'react'

import { Burger_Container } from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient'
const Burger = ({ ingredients }) => {
    let finalIngredients =
        Object.keys(ingredients)
            .map(ingredient => {
                return [...Array(ingredients[ingredient])]
                    .map((_, index) => <Ingredient
                        key={ingredient + index}
                        type={ingredient} />)
            })
            .reduce((transformedIngredientsArr, currentIngredient) => 
            transformedIngredientsArr.concat(currentIngredient), 
            [])
    if (!finalIngredients.length) 
        finalIngredients = <p>Please, start adding ingredients!</p>
    return (
        <div className={Burger_Container}>
            <Ingredient type="bread-top" />
            {finalIngredients}
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger
