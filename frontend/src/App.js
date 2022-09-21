import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Checkouts from "./screens/Checkouts";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AccountScreen from "./screens/AccountScreen";
import store from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Layout/Root";
import ErrorScreen from "./screens/ErrorScreen";
import Information from "./components/checkouts/Information";
import Shipping from "./components/checkouts/Shipping";
import Payment from "./components/checkouts/Payment";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Orders from "./components/account/Orders";
import WishList from "./components/account/WishList";
import Settings from "./components/account/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "products",
        element: <SearchScreen />,
      },

      {
        path: "product/:id",
        element: <ProductScreen />,
      },
      {
        path: "cart/:id",
        element: <CartScreen />,
      },
      {
        path: "checkouts",
        element: <Checkouts />,
        children: [
          {
            path: "/checkouts/",
            element: <Information />,
          },
          {
            path: "/checkouts/shipping/",
            element: <Shipping />,
          },
          {
            path: "/checkouts/payment/",
            element: <Payment />,
          },
        ],
      },
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "register",
        element: <RegisterScreen />,
      },
      {
        path: "account",
        element: <AccountScreen />,
        children: [
          {
            path: "/account/",
            element: <Orders />,
          },
          {
            path: "/account/wishlist/",
            element: <WishList />,
          },
          {
            path: "/account/settings/",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
