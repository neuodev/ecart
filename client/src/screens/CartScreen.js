import { Breadcrumbs } from "@mui/material";
import React, { useEffect } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartItems from "../components/Cartscreen/CartItems";
import CartTotals from "../components/Cartscreen/CartTotals";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cart";
import MainNavbar from "../components/HomeScreen/MainNavbar";
import { useLocation, useParams } from "react-router-dom";
import CheckoutSteps from "../components/common/CheckoutSteps";
import EmptyCart from "../components/Cartscreen/EmptyCart";

const CartScreen = () => {
  const productId = useParams().id;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const qty = Number(params.get("qty")) || 1;

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl">
          <MainNavbar />
          <div className="mx-5">
            <CheckoutSteps currStep={1} />
          </div>
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
