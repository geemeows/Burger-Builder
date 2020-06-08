import React from 'react'

import Logo from '@/components/Logo/Logo'
import NavigationItems from '../Navigation/Navigation'
import Backdrop from '@/components/Backdrop/Backdrop'
import classes from './SideDrawer.module.css'
const SideDrawer = ({ drawerState, dismissDrawer}) => {
    let drawerClasses = [classes.SideDrawer, classes.Close]
    if (drawerState) drawerClasses = [classes.SideDrawer, classes.Open]
    else drawerClasses = [classes.SideDrawer, classes.Close]
    return (
        <React.Fragment>
            <Backdrop show={drawerState} dismiss={dismissDrawer}/>
            <div className={drawerClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer