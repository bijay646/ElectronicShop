import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart4 } from "react-icons/bs"


const Navbar = ({ click }) => {

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
                        <select name="cars" id="cars" className='select_category'>
                            <option value="volvo">Price</option>
                            <option value="saab">Category</option>
                            <option value="mercedes">Date</option>
                        </select>
                    </Link>
                </li>
                <li>
                    <button onClick={click} className='cart__link'>
                        <BsCart4 className='cart__logo'/>
                        <span>Cart</span>
                        <span className='cartlogo__badge'>{getCartCount()}</span>
                    </button>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar