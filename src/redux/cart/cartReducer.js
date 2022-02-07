const initialState = {
    selectedItems: [],
    total: 0,
    itemsCounter: 0,
    checkout: false
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
    const total = items.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2)
    return { itemsCounter, total }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                checkout: false,
                ...sumItems(state.selectedItems)
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(state.selectedItems)
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                total: 0,
                itemsCounter: 0,
                checkout: true
            }

        case "CLEAR":
            return {
                selectedItems: [],
                total: 0,
                itemsCounter: 0,
                checkout: false
            }
        default:
            return state
    }
}

export default cartReducer