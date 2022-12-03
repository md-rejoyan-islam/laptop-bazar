import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const { data: account = [], refetch } = useQuery({
    queryKey: ["account"],
    queryFn: () =>
      fetch(
        `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/account?email=${user.email}`
      ).then((res) => res.json()),
  });

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to={"/"}>Product</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>

      {user?.uid ? (
        <>
          {account[0]?.account_type === "buyer" && (
            <>
              <li>
                <Link to={"/favorite"}>Favorite</Link>
              </li>
              <li>
                <Link to={"/review-order"}>Review Order</Link>
              </li>
            </>
          )}
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link onClick={handleSignOut}>Sign Out</Link>{" "}
          </li>
          <li>
            <img
              src={user && user?.photoURL}
              className="p-0 w-[50px] h-[50px] rounded-full border"
              alt=""
            />
          </li>{" "}
        </>
      ) : (
        <li>
          {" "}
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <section className="bg-white shadow-md">
      <div className="navbar  lg:flex lg:justify-around h-[64px] lg:px-12 w-full 2xl:w-[1441px] mx-auto">
        <div className="navbar-start w-screen ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <img
            src="https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/laptop-user-guide/img/laptop.png"
            className="w-[60px]"
            alt=""
          />
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Laptop Bazar
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <label
          tabIndex={0}
          htmlFor="my-drawer-2"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>{" "}
    </section>
  );
};

export default Header;
