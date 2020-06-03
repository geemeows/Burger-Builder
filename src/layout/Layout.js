import React from 'react'

import classes from './Layout.module.css'
const Layout = ({ children }) => (
    <React.Fragment>
        <div>
            01. Toolbar
            02. Sidedrawer
            03. Backdrop
        </div>
        <main className={classes.main_container}>
            {children}
        </main>
    </React.Fragment>
)

export default Layout