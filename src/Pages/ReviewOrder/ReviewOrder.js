import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/UseContext";
import "./ReviewOrder.css";
const ReviewOrder = () => {
  const { user } = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  const { data: saleProduct = [], refetch } = useQuery({
    queryKey: ["saleInformation"],
    queryFn: () =>
      fetch(
        `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productSaleDetails?email=${user.email}`
      ).then((res) => res.json()),
  });
  useEffect(() => {
    const priceList = saleProduct.map((product) => product.totalPrice);
    let sum = 0;
    for (let i = 0; i < priceList.length; i++) {
      sum = sum + Number(priceList[0]);
    }
    setPrice(sum);
  }, [saleProduct]);

  const clearAll = () => {
    fetch(
      `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productSaleDetails`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("All product successfully deleted");
        refetch();
        console.log(data);
      });
  };

  const deleteProduct = (id) => {
    fetch(
      `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productSaleDetails/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("product successfully deleted");
        refetch();
        console.log(data);
      });
  };

  return (
    <section className="grid grid-cols-6 px-10 m-auto my-10">
      <div className="grid mx-auto  xl:grid-cols-3 lg:grid-cols-2 gap-8 md:col-span-4 col-span-6">
        {saleProduct.map((product, index) => (
          <div key={index} className="card bg-white shadow-md">
            <figure>
              <img src={product.productPhoto} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.productName}</h2>

              <p className="text-left">
                Product Price :{" "}
                <span className="font-bold"> {product.singlePrice} $ </span>{" "}
              </p>
              <p className="text-left">
                Amount : <span className="font-bold"> {product.amount}</span>{" "}
              </p>
              <p className="text-left">
                Total Price :{" "}
                <span className="font-bold"> {product.totalPrice} </span>{" "}
              </p>
              <div className="card-actions mt-2">
                {/* <button className="btn btn-outline w-full">
                    Confirm Order
                  </button> */}
                <button
                  className="btn w-full text-black bg-red-300 hover:bg-white"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete From List
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block px-3 col-span-2">
        <div className=" card  bg-base-100 shadow-md border border-black">
          <div className="card-body ">
            <h2 className="card-title justify-center">Order Summary</h2>
            <div className="divider h-1 m-0"></div>
            <p className="text-left">Order confirm : {saleProduct.length} </p>
            <p className="text-left">Total Price : {price} $</p>
            <p className="text-left">Shipping - 3% : {price * 0.03} $</p>
            <p className="text-left">Discount- 8% : {price * 0.08}</p>
            <p className="text-left font-bold">
              Grand Total : {price + price * 0.03 - price * 0.08}
            </p>
            <div className="card-actions justify-center ">
              <div className="btn-group w-full">
                <button
                  className="btn bg-zinc-300 hover:text-white text-black p-0 w-1/2"
                  onClick={clearAll}
                >
                  Clear Card
                </button>
                <button className="btn bg-zinc-500 w-1/2">
                  Process shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewOrder;
