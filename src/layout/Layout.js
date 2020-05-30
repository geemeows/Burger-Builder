import React from 'react'

const Layout = ({ children }) => (
    <React.Fragment>
        <div>
            01. Toolbar
            02. Sidedrawer
            03. Backdrop
        </div>
        <main>
            {children}
        </main>
    </React.Fragment>
)

export default Layout