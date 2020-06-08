import React, { Component } from 'react'

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import classes from './Layout.module.css'
class Layout extends Component {
    state = {
        showDrawer: false
    }
    closeDrawer = () => {
        this.setState({ showDrawer: false })
    }
    openDrawer = () => {
        this.setState({ showDrawer: true })
    }
    render () {
        const { children } = this.props
        return (
            <React.Fragment>
            <Toolbar openDrawer={this.openDrawer}/>
            <SideDrawer 
                drawerState={this.state.showDrawer}
                dismissDrawer={this.closeDrawer}/>
            <main className={classes.main_container}>
                {children}
            </main>
        </React.Fragment>
        )
    }
}

export default Layout