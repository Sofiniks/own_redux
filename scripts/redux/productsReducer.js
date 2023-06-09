import { products } from "../constants";
import { INCREASE_QUANTITY_ACTION, DECREASE_QUANTITY_ACTION } from "./actions";
export function productsReducer(state = products,action) {
    switch (action.type) {
        case INCREASE_QUANTITY_ACTION:
            return state.map((product) => {
                if (product.id === action.product.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product;
            })
        case DECREASE_QUANTITY_ACTION:
            return state.map((product) => {
                if (product.id === action.product.id && product.quantity > 0) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product;
            })  
    
        default:
            break;
    }
    return state;
}