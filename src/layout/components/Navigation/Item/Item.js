import React from 'react'

import classes from './Item.module.css'
const Item = ({ children, active, to }) => (
    <li className={classes.NavigationItem}>
        <a href={to} className={active ? classes.active : null}>{children}</a>
    </li>
)

export default Item