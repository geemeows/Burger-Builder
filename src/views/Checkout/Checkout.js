import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom'

import CheckoutSummary from '@/components/CheckoutSummary/CheckoutSummary'
import ContactDetails from '@/views/ContactData/ContactData'
class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0

        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            }
            else {
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({ ingredients, price })
    }
    cancelFn = () => {
        this.props.history.goBack()
    }
    continueFn = () => {
        this.props.history.replace('/checkout/contact-details')
    }
    render () {
        const { ingredients } = this.state
        const { price } = this.state
        return (
            <div>
                {
                    ingredients ? 
                        <CheckoutSummary 
                            ingredients={ingredients} 
                            cancelFn={this.cancelFn}
                            continueFn={this.continueFn} /> :
                            null
                }
                <Route path={`${this.props.match.path}/contact-details`}>
                    <ContactDetails ingredients={ingredients} price={price} {...this.props}/>
                </Route>
            </div>
        )
    }
}

export default withRouter(Checkout)