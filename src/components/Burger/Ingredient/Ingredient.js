import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    BreadBottom,
    BreadTop,
    Seeds1,
    Seeds2,
    Meat,
    Cheese,
    Salad,
    Bacon
} from './Ingredient.module.css'
class Ingredient extends Component {
    render() {
        let ingredient = null
        const { type } = this.props
        if (type === 'bread-bottom') {
            ingredient = <div className={BreadBottom}></div>
        } else if (type === 'bread-top') {
            ingredient = (
                <div className={BreadTop}>
                    <div className={Seeds1}></div>
                    <div className={Seeds2}></div>
                </div>
            )
        } else if (type === 'meat') {
            ingredient = <div className={Meat}></div>
        } else if (type === 'cheese') {
            ingredient = <div className={Cheese}></div>
        } else if (type === 'bacon') {
            ingredient = <div className={Bacon}></div>
        } else if (type === 'salad') {
            ingredient = <div className={Salad}></div>
        } else {
            ingredient = null
        }

        return ingredient
    }
}

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredient