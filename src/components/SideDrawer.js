import './SideDrawer.scss';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from './CartItem';
import { addToCart, removeFromCart } from "../redux/actions/cartActions";



const SideDrawer = ({ show, click }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) =>

                price + Number(item.price.slice(1)) * item.qty, 0)
            .toFixed(2);
    };

    const sideDrawerClass = ["sidedrawer"];
    if (show) {
        sideDrawerClass.push("show");
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <div className="cartscreen">

                <div className="cartscreen__left">
                    <h2>Shopping Cart</h2>

                    {cartItems.length === 0 ? (
                        <div>
                            Your Cart Is Empty <Link to="/">Go Back</Link>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <CartItem
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeFromCartHandler}
                            />
                        ))
                    )}
                </div>

                <div className="cartscreen__right">
                    <div className="cartscreen__info">
                        <p>Subtotal ({getCartCount()}) items</p>
                        <p>Rs.{getCartSubTotal()}</p>
                    </div>
                    {cartItems.length === 0 ? (
                        <div>
                            <button className='checkout__btn'>Checkout</button>
                        </div>
                    ) : (
                        <div>
                            <Link to='/checkout' className='checkout__btn'>Checkout</Link>
                        </div>
                    )
                    }

                    
                </div>
            </div>
        </div>
    )
}

export default SideDrawer