import './ProductScreen.scss';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({click }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  
  useEffect(() => {
    if (product && params.id !== product.id) {
      dispatch(getProductDetails(params.id));
    }
  }, [dispatch, product, params.id]);


  const addToCartHandler = () => {
    dispatch(addToCart(product.id, qty));
    click();
  };
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={`https://electronic-ecommerce.herokuapp.com/${product.image}`} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              {/* <p>Price: Rs.{product.price.slice(1)}</p> */}
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                {/* <span>Rs.{product.price.slice(1)}</span> */}
              </p>
              <p>
                Status:
                <span>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen