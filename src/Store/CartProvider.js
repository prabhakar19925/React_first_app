import CartContext from "./cart-context"; 
import { useReducer } from "react";

const defaultcartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    console.log(action);
    if(action.type === 'ADD') {
       const updatedTotalItem = state.totalAmount + action.item.price * action.item.amount;
       const existingcartItemIndex = state.items.findIndex(item=>item.id === action.item.id);

       const existItemOncart = state.items[existingcartItemIndex];
       let updatedItem;
       let updatedItems;

       if(existItemOncart) {
            updatedItem = {
                ...existItemOncart, amount: existItemOncart.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingcartItemIndex] = updatedItem;
       } else {
         updatedItems = state.items.concat(action.item)
       }
       return ({items: updatedItems, totalAmount:updatedTotalItem})
    }
    if(action.type === 'REMOVE') {
        const existingcartItemIndex = state.items.findIndex(item=>item.id === action.id);
        const existItemOncart = state.items[existingcartItemIndex];
        const updatedTotalItem = state.totalAmount -  existItemOncart.price;
        let updatedItem;
        let updatedItems;
 
        if(existItemOncart.amount === 1) {
            updatedItems = state.items.filter((item) => {
             return item.id !== action.id;
            })
       } else {
         updatedItem = {...existItemOncart, amount: existItemOncart.amount -1}
         updatedItems = [...state.items];
         updatedItems[existingcartItemIndex] = updatedItem;
       }
       return ({items: updatedItems, totalAmount:updatedTotalItem})
    }
    return defaultcartState;
}
const CartProvider = (props) => {
    const [cartState, dispatCartAction] = useReducer(cartReducer, defaultcartState)
    const addItemHandler = (item) => {
        dispatCartAction({type: 'ADD', item:item})
    }
    const removeItemHandler = (id) => {
        dispatCartAction({type: 'REMOVE', id:id})
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider