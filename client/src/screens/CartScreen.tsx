import { useEffect } from "react";
import CartItems from "../components/Cartscreen/CartItems";
import CartTotals from "../components/Cartscreen/CartTotals";
import { useSelector } from "react-redux";
import { addToCart } from "../actions/cart";
import { useLocation, useParams } from "react-router-dom";
import CheckoutSteps from "../components/common/CheckoutSteps";
import EmptyCart from "../components/Cartscreen/EmptyCart";
import { RootState, useAppDispatch } from "../store";

const CartScreen = () => {
  const productId = useParams().id;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const qty = Number(params.get("qty")) || 1;

  const dispatch = useAppDispatch();
  const { cartItems } = useSelector<RootState, RootState["cart"]>(
    (state) => state.cart
  );

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <>
      <div className="bg-gray-50 w-full">
        <div className="mb-5 px-4 mx-auto container">
          <CheckoutSteps currStep={1} />
        </div>
      </div>
      <div className="container mx-auto lg:px-4 py-12 lg:min-h-700">
        <div className="grid grid-cols-12 lg:gap-5 max-w-7xl relative ">
          {cartItems.length === 0 ? (
            <div className="col-span-12 flex items-center justify-center h-full lg:min-h-600">
              <EmptyCart />
            </div>
          ) : (
            <div className="col-span-12 lg:col-span-8 flex flex-col space-y-3 px-4 lg:px-0 mb-8">
              <div className="">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="mb-4">
                    <CartItems cartItem={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="col-span-12 lg:col-span-4 flex items-center lg:items-start justify-center">
              <CartTotals cartItems={cartItems} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartScreen;
