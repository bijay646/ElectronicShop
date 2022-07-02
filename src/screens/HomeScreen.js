import "./HomeScreen.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;


  const demo = useSelector(state => state.filter);
  const { option } = demo;
  console.log(option);
  var iterateProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  //we have used switch to change the content of homescreen according to the selected category
  switch (option) {
    case 'home':
      iterateProducts = products;
      break;
    case 'laptop':
      iterateProducts = products.filter((product) => product.category[1] === 'laptop');
      break;
    case 'mobile':
      iterateProducts = products.filter((product) => product.category[1] === 'mobile');
      break;
    case 'watch':
      iterateProducts = products.filter((product) => product.category[1] === 'watch');
      break;
    case 'keyboard':
      iterateProducts = products.filter((product) => product.category[1] === 'keyboard');
      break;
    case 'headseat':
      iterateProducts = products.filter((product) => product.category[1] === 'headseat');
      break;
    case 'low':
      iterateProducts = products.filter((product) => product.price.slice(1) <= 1000);
      break;
    case 'high':
      iterateProducts = products.filter((product) => product.price.slice(1) > 1000);
      break;

    default:
      console.log('error');
  }

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          iterateProducts.map((product) => (

            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.image}
              productId={product.id}
              createDate={product.createDate}
              category={product.category}
              stock={product.stock}
            />

          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;