import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UseContext';

const AllProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: listedProduct = [], refetch } = useQuery({
      queryKey: ["listedProduct"],
      queryFn: () =>
        fetch(
          `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/addedProductList?email=${user.email}`
        ).then((res) => res.json()),
    });
    return (
      <div className="overflow-x-auto my-5">
        <h1 className="font-bold mb-1 bg-zinc-500 p-2">
          Favorite Product List
        </h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Product Name</th>
              <th>MOdel</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {listedProduct.map((product) => (
              <tr className="hover">
                <td>
                  {" "}
                  <img
                    src={product.photo}
                    className="w-[50px] h-[50px]"
                    alt=""
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.model}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllProducts;