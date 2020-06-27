import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Burger from '@/components/Burger/Burger'
import BuildControls from '@/components/BuildControls/BuildControls'
import OrderSummary from '@/components/OrderSummary/OrderSummary'
import Spinner from '@/components/Spinner/Spinner'
import Modal from '@/components/Modal/Modal'
import ErrorHandler from '@/HoC/ErrorHandler'
import { serverHttp } from '@/core/httpClient'
import * as actions from '@/store/actions'
// import { getIngredients } from '@/core/CRUD/crud.services'

class BurgerBuilder extends Component {
    state = {
        showSummaryModal: false,
        isLoading: false,
        error: false
    }

    componentDidMount() {
        // getIngredients()
        //     .then(({ data }) => {
        //         this.setState({ ingredients: data })
        //     })
        //     .catch(err => {
        //         this.setState({ error: true })
        //         console.log(err)
        //     })
    }

    showSummary = () => {
        this.setState({ showSummaryModal: true })
    }

    purchaseCheck = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingredient => ingredients[ingredient])
            .reduce((accumulator, it) => accumulator + it, 0)
        return sum > 0 
    }

    
    clearSummary = () => {
        this.setState({ showSummaryModal: false })
    }
    continuePurchase = () => {
        const queryParams = []
        const { ingredients } = this.state
        for (let ingredient in ingredients) {
            queryParams.push(`${encodeURIComponent(ingredient)}=${encodeURIComponent(ingredients[ingredient])}`)
        }
        queryParams.push(`price=${this.props.totalPrice}`)
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`
        })
    }
    render() {
        const disableInfo = { ...this.props.ingredients }
        Object.keys(disableInfo).forEach(it => {
            disableInfo[it] = disableInfo[it] <= 0
        })
        return (
            <React.Fragment>
                <Modal show={this.state.showSummaryModal} closeSummary={this.clearSummary}>
                    {
                        this.state.isLoading ? 
                            <Spinner /> :                     
                            (this.props.ingredients ? 
                                <OrderSummary 
                                ingredients={this.props.ingredients}
                                cancelBehavior={this.clearSummary}
                                continueBehavior={this.continuePurchase}
                                price={this.props.totalPrice}/> :
                                null
                            )
                    }

                </Modal>
                {
                    this.props.ingredients ? 
                        <React.Fragment>
                            <Burger ingredients={this.props.ingredients}/>
                            <BuildControls 
                                addIngredient={this.props.addIngredient}
                                removeIngredient={this.props.removeIngredient}
                                disableInfo={disableInfo}
                                displaySummary={this.showSummary}
                                purchasable={this.purchaseCheck(this.props.ingredients)}
                                price={this.props.totalPrice}/>
                        </React.Fragment> :
                        (
                            this.state.error ?
                                <p>App cannot get ingredients from server</p> :
                                <Spinner />
                        )

                }

            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingredient) => dispatch({ type : actions.ADD_INGREDIENT, payload: ingredient }),
        removeIngredient: (ingredient) => dispatch({ type : actions.REMOVE_INGREDIENT, payload: ingredient })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(withRouter(BurgerBuilder), serverHttp))
