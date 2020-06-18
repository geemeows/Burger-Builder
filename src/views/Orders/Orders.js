import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import OrderCard from '@/components/OrderCard/OrderCard'
import Spinner from '@/components/Spinner/Spinner'
import { getOrders } from '@/core/CRUD/crud.services'
class Orders extends Component {
    state = {
        orders: [],
        isLoading: false
    }
    componentDidMount() {
        this.setState((prevState) => ({ isLoading: !prevState.isLoading }))
        getOrders()
            .then(fetchedOrders => {
                // console.log(fetchedOrders)
                this.setState((prevState) => ({
                    orders: fetchedOrders,
                    isLoading: !prevState.isLoading
                }))
            })
            .catch(err => {
                console.log(err)
                this.setState((prevState) => ({
                    isLoading: !prevState.isLoading
                }))
            })
    }
    render() {
        const { isLoading, orders } = this.state
        return (
            <div>
                {
                    isLoading ? 
                        <Spinner /> :
                        orders.map(order => <OrderCard key={order.id} order={order}/>)
                }
                {/* <OrderCard /> */}
            </div>
        )
    }
}

export default withRouter(Orders)