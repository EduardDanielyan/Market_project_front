import { ADD_CARD, ADD_ORDER, CHECK_USER, DEL_CARD, SET_ALL_PRODUCTS, SET_LOG_DATA, SET_PRODUCT, SET_PRODUCTS, SHOW_CARD, SHOW_DETAILS } from "./types"

export function setLogin(data) {
    return {
        type: SET_LOG_DATA,
        payload: data
    }
}

export function setProducts(data) {
    return {
        type: SET_PRODUCTS,
        payload: data
    }
}


export function setProduct(data) {
    return {
        type: SET_PRODUCT,
        payload: data
    }
}

export function checkUser(data) {
    return {
        type: CHECK_USER,
        payload: data
    }
}

export function cardAdd(data) {
    return {
        type: ADD_CARD,
        payload: data
    }
}

export function cardShop(data) {
    return {
        type: SHOW_CARD,
        payload: data
    }
}

export function cardDel(data) {
    return {
        type: DEL_CARD,
        payload: data
    }
}

export function addOrd(data) {
    return {
        type: ADD_ORDER,
        payload: data
    }
}

export function showdetails(data) {
    return {
        type: SHOW_DETAILS,
        payload: data
    }
}