import './Product.scss'
import { Link } from 'react-router-dom'


const Product = ({ imageUrl, name, price, productId, createDate, category, stock }) => {
    return (
        <div className='product'>
            <img
                src={`https://electronic-ecommerce.herokuapp.com/${imageUrl}`}
                alt={name} />

            <div className='product_info'>
                <p className='info__name'>{name}</p>
                <p className='info__price'>Rs.{price.slice(1)}</p>
                <p ><span className='info__category1'>Category:</span>{category[0]} <span className='info__category2'>({category[1]})</span></p>
                <Link to={`/product/${productId}`} className="info__button">
                    View Product
                </Link>

            </div>
        </div>
    )
}

export default Product