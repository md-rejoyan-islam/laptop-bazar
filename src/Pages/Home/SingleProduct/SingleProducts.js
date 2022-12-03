import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";

const SingleProducts = () => {
  const { user } = useContext(AuthContext);
  
  

  const product = useLoaderData();
  const band = product.band;
  const [products, setProducts] = useState([]);
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
      .then((data) => setProducts(data));
  }, []);
  const [amount, setAmount] = useState(1);
  const handleMinus = () => {
    if (amount > 1) {
      const dec = amount - 1;
      setAmount(dec);
    }
  };
  const handlePlus = () => {
    const incre = amount + 1;
    setAmount(incre);
  };



  //form submit
  const handleSubmit=()=>{
const salerDetails = {
  name: user.displayName,
  productName:product.title,
  email: user.email,
  photo: user.photoURL,
  singlePrice : product.price,
  amount: amount,
  productPhoto: product.photo,
  totalPrice: (product.price * amount)
};

fetch(
  "https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/productSaleDetails",
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(salerDetails),
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
toast.success('product successfully added')
  }

  return (
    <section className="grid grid-cols-7 bg-white my-5 xl:w-[1400px] m-auto">
      <div className="col-span-5 px-16 hero-content bg-green-100">
        <div className="">
          <img
            src={product.photo}
            className=" rounded-lg shadow-2xl m-auto py-2"
          />
        </div>
        <div className="mx-10 my-5">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="text-left mx-10">
            <p>Price : {product.price}</p>
            <p className="py-1">Model :{product.model}</p>
            <p className="py-1">Processor :{product.processor}</p>
            <p className="py-1">Ram :{product.RAM}</p>
            <p className="py-1">Display Size :{product.display_size}</p>
            <p className="py-1">RAM type :{product.RAM_type}</p>
            <p className="py-1">Storage :{product.storage}</p>
            <p className="py-1">Generation :{product.generation}</p>
          </div>
          <div className="flex justify-start my-5">
            <div className="btn-group  btn-group-horizontal mr-10">
              <button
                className="btn hover:bg-white bg-white text-black"
                onClick={handleMinus}
              >
                <i className="fa-solid fa-minus "></i>
              </button>
              <button className="text-black btn bg-white hover:bg-white">
                {amount}
              </button>
              <button
                className="text-black btn bg-white hover:bg-white"
                onClick={handlePlus}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <Link  className="btn bg-violet-900" onClick={handleSubmit}>Buy Now</Link>
          </div>
        </div>
      </div>
      <div className="col-span-2 my-5">
        <h1 className="text-lg font-bold">Others Model</h1>
        <div className="mx-5">
          {products.map((product,index) => (
            <li
              className="list-style-none text-left py-2 list-none"
              key={index}
            >
              <i className="fa-solid fa-list mr-5"></i>
              <Link
                className="hover:text-red-500"
                to={`/products/${product._id}`}
              >
                {product.title}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleProducts;
