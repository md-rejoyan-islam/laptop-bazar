import { useQuery } from '@tanstack/react-query';
import React from 'react';

const SellerList = () => {
  // seller account
  const { data: sellerAccount = [] } = useQuery({
    queryKey: ["sellerAccount"],
    queryFn: () =>
      fetch(
        `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/account?type=seller`
      ).then((res) => res.json()),
  });
  return (
    <div className="overflow-x-auto my-5">
      <h1 className="font-bold mb-1 bg-zinc-500 p-2">Favorite Product List</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Buyer Photo</th>
            <th>Buyer Name</th>
            <th>Buyer Email</th>
          </tr>
        </thead>
        <tbody>
          {sellerAccount.map((product) => (
            <tr className="hover">
              <td>
                {" "}
                <img src={product.photo} className="w-[50px] h-[50px]" alt="" />
              </td>
              <td>{product.name}</td>
              <td>{product.email}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerList;