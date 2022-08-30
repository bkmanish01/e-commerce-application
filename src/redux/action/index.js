export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const deleteItem = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}

export const minusItem = (product) => {
    return {
        type: "MINUSITEM",
        payload: product
    }
}