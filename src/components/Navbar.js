import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
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
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>

                    </Link>
                </li>
                <li>
                    <Link to='/cart' className='cart__link'>
                        <BsCart4 />
                        <span>
                            Cart
                            <span className='cartlogo__badge'>{getCartCount()}</span>
                        </span>

                    </Link>
                    <button onClick={click}>
                    cart

                    </button>
                </li>

            </ul>
            <div className='hamburger__menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar