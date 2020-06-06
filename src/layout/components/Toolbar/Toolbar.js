import React from 'react'

import Logo from '@/components/Logo/Logo'
import classes from './Toolbar.module.css'
import NavigationItems from '../Navigation/Navigation'
const Toolbar = () => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar