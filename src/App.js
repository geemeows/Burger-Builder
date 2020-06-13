import React, { Component } from 'react'
import AppLayout from '@/layout/Layout'
import BurgerBuilder from '@/views/BurgerBuilder/BurgerBuilder'
import Checkout from '@/views/Checkout/Checkout'

export default class App extends Component {
  render() {
    return (
      <AppLayout>
        <BurgerBuilder />
        <Checkout />
      </AppLayout>
    )
  }
}
