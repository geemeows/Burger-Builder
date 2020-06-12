import { serverHttp } from '../httpClient'

export const newOrder = (order) => {
    return serverHttp.post('/orders.json', order)
}

export const getIngredients = () => {
    return serverHttp.get('/ingredients.json')
}