import { createSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { useNavigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";
import { ROUTES } from "../constants/routes";

const AccountScreen = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      navigate({
        pathname: ROUTES.LOGIN,
        search: createSearchParams({
          redirect: ROUTES.ACCOUNT.ROOT,
        }).toString(),
      });
    }
  }, [userInfo, navigate]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center space-x-2 mb-2 mt-5 text-sm pl-0.5">
        <Link to="/">Home</Link>
        <BsChevronCompactRight />
        <Link to="/account" className="text-green-400">
          Account
        </Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountScreen;
