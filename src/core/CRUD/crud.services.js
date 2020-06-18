import { serverHttp } from '../httpClient'
import { modelingOrders } from './crud.model'

export const newOrder = (order) => {
    return serverHttp.post('/orders.json', order)
}

export const getIngredients = () => {
    return serverHttp.get('/ingredients.json')
}

export const getOrders = () => {
    return serverHttp.get('/orders.json')
        .then(({ data }) => modelingOrders(data))
}