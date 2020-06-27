// import { combineReducers } from 'redux'
import * as actions from './actions'
import initState from './state'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state=initState, { type, payload }) => {
    switch(type) {
        case actions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload]: state.ingredients[payload] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[payload]
            }
        case actions.REMOVE_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload]: state.ingredients[payload] > 0 ? state.ingredients[payload] - 1 : 0
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[payload]
            }
        default:
            return state
    }
}
// const ADD_INGREDIENT = (state=initState, { type, payload }) => {
//     const newState = {
//         ...state,
//         ingredients: {
//             ...state.ingredients
//         }
//     }
//     if (type === actions.ADD_INGREDIENT) {
//         newState[payload]++
//         return newState
//     } else {
//         return state
//     }
// }
// const REMOVE_INGREDIENT = (state=initState, { type, payload }) => {
//     const newState = {
//         ...state,
//         ingredients: {
//             ...state.ingredients
//         }
//     }
//     if (type === actions.REMOVE_INGREDIENT) {
//         newState[payload] = newState[payload] > 0 ? newState[payload]-- : 0
//         return newState
//     } else {
//         return state
//     }
// }

// export default combineReducers({ 
//     addIngredient: ADD_INGREDIENT,
//     removeIngredient: REMOVE_INGREDIENT
// })
export default reducer