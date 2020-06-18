import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Item.module.css'
const Item = ({ children, exact, to }) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            exact={exact}
            to={to} 
            activeClassName={classes.active}>{children}</NavLink>
    </li>
)

export default Item