import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from '@/components/CheckoutSummary/CheckoutSummary'
import ContactDetails from '@/views/ContactData/ContactData'
class Checkout extends Component {

    cancelFn = () => {
        this.props.history.goBack()
    }
    continueFn = () => {
        this.props.history.replace('/checkout/contact-details')
    }
    render () {
        const { ingredients } = this.props
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
                    <ContactDetails />
                </Route>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}
export default connect(mapStateToProps)(withRouter(Checkout))