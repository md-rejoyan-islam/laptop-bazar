import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/UseContext";

const Favorite = () => {
  const { user } = useContext(AuthContext);

  const { data: favoriteProduct = [], refetch } = useQuery({
    queryKey: ["favoriteProduct"],
    queryFn: () =>
      fetch(
        `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/favoriteProduct?email=${user.email}`
      ).then((res) => res.json()),
  });

  const deleteProduct = (id) => {
    fetch(
      `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/favoriteProduct/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("favorite product successfully remove");
        refetch();
        console.log(data);
      });
  };
  const clearAll = () => {
    fetch(
      `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/favoriteProduct`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("All favorite product successfully removed");
        refetch();
        console.log(data);
      });
  };
  return (
    <section className="mx-auto grid grid-cols-6 gap-10 px-10 my-10 content-start">
      <div className=" col-span-6  sm:col-span-4 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {favoriteProduct.map((product) => (
          <div className="card bg-white shadow-md ">
            <figure>
              <img src={product.photo} alt="" className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="text-left">
                Model : <span className="font-bold"> {product.model}</span>{" "}
              </p>
              <p className="text-left">
                Product Price :{" "}
                <span className="font-bold"> {product.price} $ </span>{" "}
              </p>
              <p className="text-left">
                Processor :{" "}
                <span className="font-bold"> {product.processor} $ </span>{" "}
              </p>
              <p className="text-left">
                Generation :{" "}
                <span className="font-bold"> {product.Generation}</span>{" "}
              </p>
              <p className="text-left">
                RAM : <span className="font-bold"> {product.RAM}</span>{" "}
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
      <div className="hidden sm:block col-span-2 card  bg-base-100 shadow-md border border-black h-fit">
        <div className="card-body">
          <h2 className="card-title justify-center">Favorite List</h2>
          <div className="divider h-1 m-0"></div>
          <p className="text-left">
            Total Added product : {favoriteProduct.length}{" "}
          </p>
          <div className=" justify-center m-0">
            <button
              className="w-full btn bg-zinc-300 hover:text-white text-black p-0 "
              onClick={clearAll}
            >
              Clear Card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Favorite;
