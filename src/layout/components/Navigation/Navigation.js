import React from 'react'

import classes from './Navigation.module.css'
import Item from './Item/Item'
const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
       <Item to="/" active>Burger Builder</Item>
       <Item to="/checkout">Checkout</Item>
    </ul>
)

export default NavigationItems