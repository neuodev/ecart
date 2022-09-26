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
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-12 min-h-700">
        <h1 className="text-xs md:text-sm tracking-wider mb-8 py-4 bg-gray-100 px-4 font-medium text-gray-900 shadow-lg">
          <Breadcrumbs separator={<BsChevronCompactRight />}>
            <Link className="text-gray-800 font-bold text-sm">Cart</Link>
            <Link to="/checkouts" className="text-xs md:text-sm">
              Information
            </Link>
            <Link to="/checkouts/shipping" className="text-xs md:text-sm">
              Shipping{" "}
            </Link>
            <Link to="checkouts/payment" className="text-xs md:text-sm">
              Payment
            </Link>
            <Link className="text-xs md:text-sm">Complete Order</Link>
          </Breadcrumbs>
        </h1>
        <div
          className="grid grid-cols-12 max-w-7xl relative"
          style={{ minHeight: "300px" }}
        >
          <div className="col-span-12 md:col-span-7 lg:col-span-9 flex flex-col space-y-3 pr-6">
            {cartItems.length === 0 && (
              <div className="w-full bg-gray-100 p-14 rounded-md">
                <h1 className="text-gray-500 font-semibold mb-2 ">
                  You cart is empty{" "}
                </h1>
                <div className="flex items-center space-x-2">
                  <Link
                    to="/products"
                    className="text-gray-500 font-semibold uppercase tracking-wider border-b-2 pb-1 border-gray-600  "
                  >
                    Search for Products
                  </Link>
                  <span className="  p-2 font-semibold text-gray-500 ">or</span>
                  <Link
                    to="/"
                    className="text-gray-500 font-semibold uppercase tracking-wider border-b-2 pb-1 border-gray-600 "
                  >
                    Go Home{" "}
                  </Link>
                </div>
              </div>
            )}
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
      </div>
    </>
  );
};

export default CartScreen;
