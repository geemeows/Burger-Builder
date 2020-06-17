import React, { Component } from 'react'

import Button from '@/components/Button/Button'
import classes from './ContactData.module.css'
import Spinner from '@/components/Spinner/Spinner'
import { newOrder } from '@/core/CRUD/crud.services'

export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        isLoading: false
    }
    createOrder = (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Gazouly',
                address: {
                    street: 'July 23, st.',
                    city: 'Edfu',
                    gov: 'Aswan'
                },
                email: 'test@test.com',
                deliveryMethod: 'fastest'
            }
        }
        newOrder(order)
            .then(res => {
                this.setState({ isLoading: false })
                this.props.history.push('/')
                console.log(res)
            })
            .catch(err => {
                this.setState({ isLoading: false })
                console.log(err)
            })
    }

    render() {
        return (
            <div className={classes.ContactData}>
                {
                    this.state.isLoading ? 
                        <Spinner /> :
                        (
                        <React.Fragment>
                            <h4>Enter your contact data</h4>
                            <form>
                                <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                                <input className={classes.Input} type="email" name="email" placeholder="Your Email"/>
                                <input className={classes.Input} type="text" name="street" placeholder="Your Street"/>
                                <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code"/>
                                <Button btnType="Success" behavior={this.createOrder}>ORDER NOW!</Button>
                            </form>
                        </React.Fragment>
                        )
                }
            </div>
        )
    }
}
