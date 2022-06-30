import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({ imageUrl, name, price, productId, createDate, category }) => {
    return (
        <div className='product'>
            <img
                src={`https://electronic-ecommerce.herokuapp.com/${imageUrl}`}
                alt={name} />

            <div className='product_info'>
                <p className='info__name'>{name}</p>
                <p className='info__price'>Rs.{price.slice(1)}</p>
                <Link to={`/product/${productId}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default Product