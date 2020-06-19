import React, { Component } from 'react'

import Button from '@/components/Button/Button'
import classes from './ContactData.module.css'
import Spinner from '@/components/Spinner/Spinner'
import Input from '@/components/Input/Input'
import { newOrder } from '@/core/CRUD/crud.services'

const createFormElement = (type, config, value = '') => ({ 
    elementType: type,
    elementConfig: config,
    value
})
export default class ContactData extends Component {
    state = {
        orderForm: {
            name: createFormElement('input', { name: 'name', type: 'text', placeholder: 'Your Name' }),
            street: createFormElement('input', { name:'street', type: 'text', placeholder: 'Your Street' }),
            zipCode: createFormElement('input', { name:'zip', type: 'text', placeholder: 'Your ZIP Code' }),
            country: createFormElement('input', { name:'country', type: 'text', placeholder: 'Your Country' }),
            email: createFormElement('email', { name:'email', type: 'email', placeholder: 'Your Email' }),
            deliveryMethod: createFormElement('select', 
                {   name:'delivery', 
                    options: [
                        { name: 'Fastest', value: 'fastest'},
                        { name: 'Cheapest', value: 'cheapest'}
                    ] 
                })
        },
        isLoading: false
    }

    createOrder = (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
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

    updateInput = (e, key) => {
        const updatedOrderForm = { ...this.state.orderForm}
        updatedOrderForm[key].value = e.target.value
        this.setState({ orderForm: updatedOrderForm })
    }

    render() {
        const form = []
        for (let key in this.state.orderForm) {
            form.push({
                id: key,
                config: {...this.state.orderForm[key]}
            })
        }
        return (
            <div className={classes.ContactData}>
                {
                    this.state.isLoading ? 
                        <Spinner /> :
                        (
                        <React.Fragment>
                            <h4>Enter your contact data</h4>
                            <form>
                                {
                                    form.map((el) => (
                                        <Input 
                                            key={el.id}
                                            elementType={el.config.elementType} 
                                            elementConfig={el.config.elementConfig} 
                                            value={el.config.value} 
                                            update={(e) => this.updateInput(e, el.id)}/>
                                    ))
                                }
                                
                                <Button btnType="Success" behavior={this.createOrder}>ORDER NOW!</Button>
                            </form>
                        </React.Fragment>
                        )
                }
            </div>
        )
    }
}
