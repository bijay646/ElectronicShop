import './ProductScreen.scss';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ click }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();

  //get cart items from store
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  //get product details from store
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  const checkItem = cartItems.filter((item) => item.product === product.id)
  console.log(checkItem[0]);

  useEffect(() => {
    if (product && params.id !== product.id) {
      dispatch(getProductDetails(params.id));
    }
  }, [dispatch, product, params.id]);

  //get the formatted date
  function getFormattedDate(milliseconds) {
    const time = Date(milliseconds);
    const formatedTime = time.split(' ');
    const day = formatedTime[2];
    const month = formatedTime[1];
    const year = formatedTime[3];
    return (day + '-' + month + '-' + year);

  }

  const addToCartHandler = () => {
    dispatch(addToCart(product.id, qty));
    click();
  };
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading....</h2>
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
              <p><span>Created Date:</span> {getFormattedDate(product.createDate)}</p>

            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">

              <p>
                Status:
                <span>
                  {(checkItem[0]) ? (checkItem[0].remaining > 0 ? "In Stock":"Out of Stock") : (product.stock > 0 ? "In Stock" : "Out of Stock")}

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
                {(checkItem[0]) ?
                  (checkItem[0].remaining > 0 ?
                    (<button type="button" onClick={addToCartHandler}>
                      Add To Cart
                    </button>) :
                    (<button>Add To Cart</button>)) :
                  (product.stock > 0 ?
                    (<button type="button" onClick={addToCartHandler}>
                      Add To Cart
                    </button>) :
                    (<button>Add To Cart</button>))
                }
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen