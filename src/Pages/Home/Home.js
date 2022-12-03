import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./Products/Products";

const Home = () => {

  const { data: products = [] } = useQuery({
    queryKey: ["appointmentCollection"],
    queryFn: () =>
      fetch(
        `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/products`
      ).then((res) => res.json()),
  });
  const [band, setBand] = useState("");

  const productPrice = products.map((product) => product.price);
  
  const maxPrice = Math.max(...productPrice)

  const [price, setPrice] = useState(maxPrice ? maxPrice: '97300');

  const handlePriceRange = (e) => {
    setPrice(e.target.value);
  };
  const handleBand = (e) => {
    const name = e.target.value.toUpperCase();

    setBand(name);
  };

  const [searchProducts, setSearchProducts] = useState(products);

  //search by Band

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productsByBand",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ band: band }),
      }
    )
      .then((res) => res.json())
      .then((data) => setSearchProducts(data));
  }, [band]);

  //   search by Price
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productsByPrice",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price: price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setSearchProducts(data));
  }, [price]);

  return (
    <section className="2xl:w-[1414px] mx-auto grid grid-cols-12 my-8">
      <div className="sm:col-span-4 px-5 h-[900px] hidden sm:block">
        <div className="static top-[20px]" style={{ position: "static" }}>
          <div className=" price-range">
            <div className="card  bg-white shadow-xl rounded-md ">
              <div className="card-body p-0 py-5">
                <h2 className="card-title px-5 "> Price Range </h2>
                <div className="divider w-full h-1"></div>
                <div className="card-actions justify-between px-5">
                  <input
                    type="text"
                    className="border w-16 p-1 border-zinc-400 text-center"
                    disabled
                    value={"0"}
                  />
                  <input
                    type="text"
                    value={price=== -Infinity ? 97300 : price }
                    className="border w-16 p-1 border-zinc-400 text-center"
                    disabled
                  />
                  <input
                    type="range"
                    name="range"
                    id=""
                    className="w-full py-2"
                    min={0}
                    max={maxPrice ? maxPrice : 97300}
                    value={price}
                    onChange={handlePriceRange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white px-5 my-5 rounded-md">
            <div className="form-control w-full pb-8">
              <label className="label justify-center">
                <span className="text-center text-lg font-bold">Brand</span>
              </label>
              <select
                className="select select-bordered bg-white text-center justify-center"
                onChange={handleBand}
              >
                <option name="band" value={""}>
                  All Brand
                </option>
                <option name="band" value={"hp"}>
                  HP
                </option>
                <option name="band" value={"asus"}>
                  ASUS
                </option>
                <option name="band" value={"lenevo"}>
                  LENOVO
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8">
        <Products
          products={searchProducts.length > 1 ? searchProducts : products}
        ></Products>
      </div>
    </section>
  );
};

export default Home;
