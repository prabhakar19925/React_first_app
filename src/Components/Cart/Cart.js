import Model from '../UI/Model'
import classes from './Cart.module.css'
const Cart = props =>{
const cartItems = (
    <ul className={classes['cart-items']}>
    {[
    {id: 'c1', name: 'Sushi', amount: 2, price:12.99}
].map((item) => {
<li>{item.name}</li>
})}
</ul>
)

return <Model>
    {cartItems}
    <div>
        <span>Total Amount</span>
        <span>35.62</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']}>
        close</button>
         <button className={classes.button}>Order</button>
    </div>
</Model>
}
export default Cart;