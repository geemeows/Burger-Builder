import React from 'react'

import classes from './Navigation.module.css'
import Item from './Item/Item'
const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
       <Item to="/" exact>Burger Builder</Item>
       <Item to="/orders">Orders</Item>
    </ul>
)

export default NavigationItems