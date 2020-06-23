import React, { Component } from 'react'

import Button from '@/components/Button/Button'
import classes from './ContactData.module.css'
import Spinner from '@/components/Spinner/Spinner'
import Input from '@/components/Input/Input'
import { newOrder } from '@/core/CRUD/crud.services'

const createFormElement = ({ type, config, validations, value = '', valid = false, touched = false } = {}) => ({ 
    elementType: type,
    elementConfig: config,
    validations,
    value,
    valid,
    touched
})
export default class ContactData extends Component {
    state = {
        orderForm: {
            name: createFormElement({ 
                    type: 'input', 
                    config: { name: 'name', type: 'text', placeholder: 'Your Name' },
                    validations: {
                        required: true
                    }
            }),
            street: createFormElement({
                    type: 'input', 
                    config: { name:'street', type: 'text', placeholder: 'Your Street' },
                    validations: {
                        required: true
                    }
            }),
            zipCode: createFormElement({
                    type: 'input', 
                    config: { name:'zip', type: 'text', placeholder: 'Your ZIP Code' },
                    validations: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    }
            }),
            country: createFormElement({
                    type: 'input', 
                    config: { name:'country', type: 'text', placeholder: 'Your Country' },
                    validations: {
                        required: true
                    }
            }),
            email: createFormElement({
                    type: 'email', 
                    config: { name:'email', type: 'email', placeholder: 'Your Email' },
                    validations: {
                        required: true
                    }
            }),
            deliveryMethod: createFormElement({
                    type: 'select', 
                    config: { name:'delivery', options: [
                        { name: 'Fastest', value: 'fastest'},
                        { name: 'Cheapest', value: 'cheapest'}
                    ]},
                    validations: {},
                    valid: true
            })
        },
        formIsValid: false,
        isLoading: false
    }
    checkValidty = (value, rules) => {
        let isValid = true
        if (rules.required) { isValid = value.trim() !== '' && isValid }
        if (rules.minLength) { isValid = value.length >= rules.minLength && isValid }
        if (rules.maxLength) { isValid = value.length <= rules.maxLength && isValid }
        
        return isValid
    }

    createOrder = (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })
        const orderData = {} 
        for (let key in this.state.orderForm) {
            orderData[key] = this.state.orderForm[key].value
        }
        const order = {
            orderData,
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
        updatedOrderForm[key].touched = true
        updatedOrderForm[key].valid = this.checkValidty(updatedOrderForm[key].value, updatedOrderForm[key].validations)
        
        let formIsValid = true
        for (let key in updatedOrderForm) {
            formIsValid = updatedOrderForm[key].valid && formIsValid
        }
        console.log(formIsValid)

        this.setState({ orderForm: updatedOrderForm, formIsValid })
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
                            <form onSubmit={this.createOrder}>
                                {
                                    form.map((el) => (
                                        <Input 
                                            key={el.id}
                                            elementType={el.config.elementType} 
                                            elementConfig={el.config.elementConfig} 
                                            value={el.config.value}
                                            isValid={el.config.valid}
                                            touched={el.config.touched}
                                            shouldValidate={Object.keys(el.config.validations).length !== 0} 
                                            update={(e) => this.updateInput(e, el.id)}/>
                                    ))
                                }
                                
                                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER NOW!</Button>
                            </form>
                        </React.Fragment>
                        )
                }
            </div>
        )
    }
}
