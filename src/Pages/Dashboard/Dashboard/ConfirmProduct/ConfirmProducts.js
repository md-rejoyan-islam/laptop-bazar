import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UseContext';

const ConfirmProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: ConfirmProduct = [], refetch } = useQuery({
      queryKey: ["saleInformation"],
      queryFn: () =>
        fetch(
          `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productSaleDetails?email=${user.email}`
        ).then((res) => res.json()),
    });
    return (
      <div className="overflow-x-auto my-5">
        <h1 className="mb-1 font-bold bg-zinc-500 p-2">
          Confirm Products List
        </h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {ConfirmProduct.map((product) => (
              <tr className="hover">
                <td>
                  {" "}
                  <img
                    src={product.productPhoto}
                    className="w-[50px] h-[50px]"
                    alt=""
                  />
                </td>
                <td>{product.productName}</td>
                <td>{product.amount}</td>
                <td>{product.singlePrice}</td>
                <td>{product.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ConfirmProducts;