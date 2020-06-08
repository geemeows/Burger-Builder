import React, { Component } from 'react'

import Burger from '@/components/Burger/Burger'
import BuildControls from '@/components/BuildControls/BuildControls'
import Modal from '@/components/Modal/Modal'
import OrderSummary from '@/components/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0
        },
        totalPrice: 4,
        canPurchase: false,
        showSummaryModal: false,
    }

    showSummary = () => {
        this.setState({ showSummaryModal: true })
    }

    purchaseCheck = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredient => ingredients[ingredient])
            .reduce((accumulator, it) => accumulator + it, 0)
        this.setState({ canPurchase: sum > 0 })
    }
    addNewIngredient = (type) => {
        const ingredients = { ...this.state.ingredients}
        ingredients[type]++

        const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState({
            ingredients,
            totalPrice
        })
        this.purchaseCheck(ingredients)
    }
    removeIngredient = (type) => {
        const ingredients = { ...this.state.ingredients}
        if (ingredients[type] <= 0) return
        
        ingredients[type]--
        const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type]

        this.setState({
            ingredients,
            totalPrice
        })
        this.purchaseCheck(ingredients)

    }
    clearSummary = () => {
        this.setState({ showSummaryModal: false })
    }
    continuePurchase = () => {
        alert('PURCHASED!!')
        this.setState({ showSummaryModal: false })
    }
    render() {
        const disableInfo = { ...this.state.ingredients }
        Object.keys(disableInfo).forEach(it => {
            disableInfo[it] = disableInfo[it] <= 0
        })
        return (
            <React.Fragment>
                <Modal show={this.state.showSummaryModal} closeSummary={this.clearSummary}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        cancelBehavior={this.clearSummary}
                        continueBehavior={this.continuePurchase}
                        price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addNewIngredient}
                    removeIngredient={this.removeIngredient}
                    disableInfo={disableInfo}
                    displaySummary={this.showSummary}
                    purchasable={this.state.canPurchase}
                    price={this.state.totalPrice}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder