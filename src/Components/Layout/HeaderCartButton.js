import CartIcon from "./CartIcon";
import classes from  './HeaderCartButton.module.css'
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {

const cartcontext = useContext(CartContext)

const numberOfCartItems = cartcontext.items.reduce((curtNumber, item) => {
return curtNumber + item.amount
}, 0);

return (
<button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span> Your Cart</span>
    <span className={classes.badge}>
        {numberOfCartItems}
    </span>
</button>
);


}

export default HeaderCartButton;