import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";
import Header from "../../Shared/Header/Header";

const DashBoardLayouts = () => {
  const { user } = useContext(AuthContext);

  const { data: account = [] } = useQuery({
    queryKey: ["account"],
    queryFn: () =>
      fetch(
        `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/account?email=${user.email}`
      ).then((res) => res.json()),
  });
  
  const { data: saleProduct = [], refetch } = useQuery({
    queryKey: ["saleInformation"],
    queryFn: () =>
      fetch(
        `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productSaleDetails?email=${user.email}`
      ).then((res) => res.json()),
  });
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile  bg-orange-100">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-white">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  bg-slate-100 text-base-content">
            <h1 className="bg-pink-200 font-bold p-1">
              Account Type : {account[0]?.account_type}
            </h1>
            {account[0]?.account_type === "seller" && (
              <>
                <li className="my-1">
                  <NavLink
                    to={"/dashboard/seller-all-product"}
                    className="bg-zinc-200 hover:bg-slate-300 text-black"
                  >
                    Total Product
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to={"/dashboard/seller-add-product"}
                    className="bg-zinc-200 text-black"
                  >
                    Add product
                  </NavLink>
                </li>
              </>
            )}

            {account[0]?.account_type === "buyer" && (
              <>
                <li className="my-1">
                  <NavLink
                    to={"/dashboard/buyer-favorite"}
                    className="hover:bg-slate-300 bg-zinc-200 text-black"
                  >
                    Favorite Products
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to={"/dashboard/buyer-confirm"}
                    className="hover:bg-slate-300 bg-zinc-200 text-black"
                  >
                    Confirm Product
                  </NavLink>
                </li>
              </>
            )}
            {account[0]?.account_type === "admin" && (
              <>
                <li className="my-1">
                  <NavLink
                    to={"/dashboard/buyer-list"}
                    className="hover:bg-slate-300 bg-zinc-200 text-black"
                  >
                    Buyer List
                  </NavLink>
                </li>
                <li className="my-1">
                  <NavLink
                    to={"/dashboard/seller-list"}
                    className="hover:bg-slate-300 bg-zinc-200 text-black"
                  >
                    Seller List
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayouts;
