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
import ScrollToTop from "./components/Layout/ScrollToTop";
import { ROUTES } from "./constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <HomeScreen />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <SearchScreen />,
      },

      {
        path: ROUTES.PRODUCT,
        element: (
          <ScrollToTop>
            <ProductScreen />,
          </ScrollToTop>
        ),
      },
      {
        path: ROUTES.CART,
        element: <CartScreen />,
      },
      {
        path: ROUTES.CHECKOUTS.ROOT,
        element: <Checkouts />,
        children: [
          {
            path: ROUTES.CHECKOUTS.INFO,
            element: <Information />,
          },
          {
            path: ROUTES.CHECKOUTS.SHIPPING,
            element: <Shipping />,
          },
          {
            path: ROUTES.CHECKOUTS.PAYMENT,
            element: <Payment />,
          },
        ],
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginScreen />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterScreen />,
      },
      {
        path: ROUTES.ACCOUNT.ROOT,
        element: <AccountScreen />,
        children: [
          {
            path: ROUTES.ACCOUNT.ORDERS,
            element: <Orders />,
          },
          {
            path: ROUTES.ACCOUNT.WISHLIST,
            element: <WishList />,
          },
          {
            path: ROUTES.ACCOUNT.SETTINGS,
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
