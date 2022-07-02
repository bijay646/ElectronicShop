import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsCart4 } from "react-icons/bs"
import { setDisplay } from '../redux/actions/filterActions';


const Navbar = ({ click }) => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <Link to="/">
                    <h2>Electronic Shop</h2>
                </Link>
            </div>

            <ul className='navbar__links'>
                <li>
                    <Link to="/">
                        <select className='select_category' onChange={(e) => dispatch(setDisplay(e.target.value))}>
                            <optgroup label="home">
                                <option value="home" >All Products</option>
                            </optgroup>
                            <optgroup label="Category">
                                <option value="laptop" >Laptop</option>
                                <option value="mobile" >Mobile</option>
                                <option value="watch" >Watch</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="headseat">Headseat</option>
                            </optgroup>
                            <optgroup label="Price">
                                <option value="low" >below 1000</option>
                                <option value="high" >Above 1000</option>
                            </optgroup>
                        </select>
                    </Link>
                </li>
                <li>
                    <button onClick={click} className='cart__link'>
                        <BsCart4 className='cart__logo' />
                        <span>Cart</span>
                        <span className='cartlogo__badge'>{getCartCount()}</span>
                    </button>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar