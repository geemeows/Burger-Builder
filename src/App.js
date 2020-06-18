import React, { Component } from 'react'
import AppLayout from '@/layout/Layout'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import BurgerBuilder from '@/views/BurgerBuilder/BurgerBuilder'
import Checkout from '@/views/Checkout/Checkout'
import Orders from '@/views/Orders/Orders'

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/">
              <BurgerBuilder />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    )
  }
}
