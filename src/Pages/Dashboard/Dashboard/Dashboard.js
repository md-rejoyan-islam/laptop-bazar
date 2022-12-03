import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

const { data: listedProduct = [] } = useQuery({
  queryKey: ["listedProduct"],
  queryFn: () =>
    fetch(
      `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/addedProductList?email=${user.email}`
    ).then((res) => res.json()),
});

    //user account
    const { data: account = [] } = useQuery({
      queryKey: ["account"],
      queryFn: () =>
        fetch(
          `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/account?email=${user.email}`
        ).then((res) => res.json()),
    });
    //confirm list
    const { data: ConfirmProduct = [], refetch } = useQuery({
      queryKey: ["saleInformation"],
      queryFn: () =>
        fetch(
          `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productSaleDetails?email=${user.email}`
        ).then((res) => res.json()),
    });

    //favorite list
    const { data: favoriteProduct = []} = useQuery({
      queryKey: ["favoriteProduct"],
      queryFn: () =>
        fetch(
          `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/favoriteProduct?email=${user.email}`
        ).then((res) => res.json()),
    });
    // seller account
    const { data: sellerAccount = [] } = useQuery({
      queryKey: ["sellerAccount"],
      queryFn: () =>
        fetch(
          `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/account?type=seller`
        ).then((res) => res.json()),
    });
    // buyer account
    const { data: buyerAccount = [] } = useQuery({
      queryKey: ["buyerAccount"],
      queryFn: () =>
        fetch(
          `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/account?type=buyer`
        ).then((res) => res.json()),
    });
   
console.log(buyerAccount);
    return (
      <div className="overflow-x-auto my-5">
        <h1 className="font-bold mb-1 bg-zinc-500 p-2">Account summery </h1>
        <table className="table w-full">
          <>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {favoriteProduct.length > 0 && (
                <tr className="hover">
                  <th>1</th>
                  <td>Favorite Products</td>
                  <td>{favoriteProduct.length}</td>
                </tr>
              )}
              {listedProduct.length > 0 && (
                <tr className="hover">
                  <th>1</th>
                  <td>Added Products List</td>
                  <td>{listedProduct.length}</td>
                </tr>
              )}

              {ConfirmProduct.length > 0 && (
                <tr className="hover">
                  <th>2</th>
                  <td>Confirm Products</td>
                  <td>{ConfirmProduct.length}</td>
                </tr>
              )}
              {user.email === "rejoyanislam0014@gmail.com" && (
                <>
                  <tr className="hover">
                    <th>2</th>
                    <td>Total Seller</td>
                    <td>{sellerAccount.length}</td>
                  </tr>
                  <tr className="hover">
                    <th>2</th>
                    <td>Total Buyer</td>
                    <td>{buyerAccount.length}</td>
                  </tr>{" "}
                </>
              )}
            </tbody>
          </>
        </table>
      </div>
    );
};

export default Dashboard;