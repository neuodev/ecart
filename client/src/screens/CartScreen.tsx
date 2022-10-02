import { useEffect } from "react";
import CartItems from "../components/Cartscreen/CartItems";
import CartTotals from "../components/Cartscreen/CartTotals";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cart";
import { useLocation, useParams } from "react-router-dom";
import CheckoutSteps from "../components/common/CheckoutSteps";
import EmptyCart from "../components/Cartscreen/EmptyCart";
import { RootState } from "../store";

const CartScreen = () => {
  const productId = useParams().id;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const qty = Number(params.get("qty")) || 1;

  const dispatch = useDispatch();
  const { cartItems } = useSelector<RootState, RootState["cart"]>(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  return (
    <>
      <div className="bg-gray-50 w-full">
        <div className="mx-auto mb-5 px-4 imax-w-screen-xl lg:max-w-5xl xl:max-w-screen-2xl">
          <CheckoutSteps currStep={1} />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-12 min-h-700">
        <div className="grid grid-cols-12 max-w-7xl relative min-h-600">
          {cartItems.length === 0 ? (
            <div className="col-span-12 flex items-center justify-center h-full">
              <EmptyCart />
            </div>
          ) : (
            <div className="col-span-12 md:col-span-7 lg:col-span-9 flex flex-col space-y-3 pr-6">
              <div>
                <div className="mb-8">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="mb-4">
                      <CartItems cartItem={item} />
                    </div>
                  ))}
                </div>
              </div>
              {cartItems.length > 0 && (
                <div className="col-span-12 md:col-span-5 lg:col-span-3 lg:absolute top-0 right-0 z-10 ">
                  <CartTotals cartItems={cartItems} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartScreen;
