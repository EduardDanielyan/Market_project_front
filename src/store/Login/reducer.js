import { logState } from "./state";
import { ADD_CARD, ADD_ORDER, CHECK_USER, DEL_CARD, SET_LOG_DATA, SET_PRODUCT, SET_PRODUCTS, SHOW_CARD, SHOW_DETAILS } from "./types";

export const logReducer = (state = logState, option) => {
    switch (option.type) {
        case SET_LOG_DATA:
            state.login = option.payload
            break
        case SET_PRODUCT:
            state.productInfo = option.payload
            break
        case SET_PRODUCTS:
            state.products = option.payload
            break
        case CHECK_USER:
            state.auth = option.payload
            break
        case ADD_CARD:
            state.card = option.payload
            break
        case SHOW_CARD:
            state.card = option.payload
            break
        case DEL_CARD:
            state.card = option.payload
            break
        case ADD_ORDER:
            state.order = option.payload
            break
        case SHOW_DETAILS:
            state.orderDetails = option.payload
            break    
        default:
            break;
    }
    return { ...state }
}