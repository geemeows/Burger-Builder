import React, { Component } from 'react'
import AppLayout from '@/layout/Layout'
import BurgerBuilder from '@/views/BurgerBuilder/BurgerBuilder'

export default class App extends Component {
  render() {
    return (
      <AppLayout>
        <BurgerBuilder />
      </AppLayout>
    )
  }
}
