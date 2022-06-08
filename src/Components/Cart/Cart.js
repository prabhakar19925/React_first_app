import Model from '../UI/Model'
import classes from './Cart.module.css'
import CartContext from '../../Store/cart-context'
import CartItem from './CartItem'
import { useContext } from 'react'
const Cart = props => {
    const cartCtx = useContext(CartContext)
    const addCartItemHandler = (item) => {
        cartCtx.addItem({
            ...item,
            amount: 1,
        })
    }

    const removeCartItemHandler = (id) => {
        cartCtx.removeItem(id)
    }

    
    const cartItems = (
        <ul className={classes['cart-items']} >
            {cartCtx.items.map((item) => {
                return <CartItem key={Math.random()}  onAdd={addCartItemHandler.bind(null, item)} onRemove={removeCartItemHandler.bind(null, item.id)} {...item} />
            })}
        </ul>
)

return <Model onClose={props.onClose}>
    {cartItems}
    <div>
        <span>Total Amount </span>
        <span>{` $${cartCtx.totalAmount.toFixed(2)}`}</span>
    </div>
    <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>
        close</button>
         <button className={classes.button}>Order</button>
    </div>
</Model>
}
export default Cart;