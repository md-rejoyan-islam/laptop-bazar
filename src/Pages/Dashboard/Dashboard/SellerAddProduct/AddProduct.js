import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/UseContext";

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data,e) => {
    data.sellerEmail=user.email
fetch(
  `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/products`,
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body:JSON.stringify(data)
  }
)
  .then((res) => res.json())
  .then((data) => {
    toast.success(" Product successfully added");
    console.log(data);
    e.target.reset();
  });


console.log(data);








  };
  return (
    <section className=" bg-base-100 py-10 pb-[100px]">
      <div className="card-body py-5 lg:w-1/3 sm:w-1/2 m-auto bg-white rounded-lg">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Title</span>
            </label>
            <input
              type="text"
              placeholder="title"
              className="input input-bordered"
              {...register("title", {
                required: "Field is required",
        
              })}
            />
            {errors.title && (
              <p className="text-red-600 text-left">{errors.title?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Model</span>
            </label>
            <input
              type="text"
              placeholder="model"
              className="input input-bordered"
              {...register("model", {
                required: "Field is required",
        
              })}
            />
            {errors.model && (
              <p className="text-red-600 text-left">{errors.model?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Band</span>
            </label>
            <input
              type="text"
              placeholder="band"
              className="input input-bordered"
              {...register("band", {
                required: "Field is required",
          
              })}
            />
            {errors.band && (
              <p className="text-red-600 text-left">{errors.band?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processor</span>
            </label>
            <input
              type="text"
              placeholder="processor"
              className="input input-bordered"
              {...register("processor", {
                required: "Field is required",
     
              })}
            />
            {errors.band && (
              <p className="text-red-600 text-left">
                {errors.processor?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              className="input input-bordered"
              {...register("price", {
                required: "Field is required",
                
              })}
            />
            {errors.price && (
              <p className="text-red-600 text-left">{errors.price?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">RAM</span>
            </label>
            <input
              type="text"
              placeholder="ram"
              className="input input-bordered"
              {...register("RAM", {
                required: "Field is required",
   
              })}
            />
            {errors.RAM && (
              <p className="text-red-600 text-left">{errors.RAM?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Storage</span>
            </label>
            <input
              type="text"
              placeholder="Storage"
              className="input input-bordered"
              {...register("Storage", {
                required: "Field is required",
      
              })}
            />
            {errors.Storage && (
              <p className="text-red-600 text-left">
                {errors.Storage?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Generation</span>
            </label>
            <input
              type="text"
              placeholder="generation"
              className="input input-bordered"
              {...register("Generation", {
                required: "Field is required",
      
              })}
            />
            {errors.Generation && (
              <p className="text-red-600 text-left">
                {errors.Generation?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">RAM Type</span>
            </label>
            <input
              type="text"
              placeholder="storage"
              className="input input-bordered"
              {...register("RAM_Type", {
                required: "Field is required",
     
              })}
            />
            {errors.RAM_Type && (
              <p className="text-red-600 text-left">
                {errors.RAM_Type?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Display Size</span>
            </label>
            <input
              type="text"
              placeholder="display size"
              className="input input-bordered"
              {...register("display_size", {
                required: "Field is required",
    
              })}
            />
            {errors.display_size && (
              <p className="text-red-600 text-left">
                {errors.display_size?.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">CPU Catch</span>
            </label>
            <input
              placeholder="CPU Catch"
              className="input input-bordered"
              {...register("CPU_Catch", {
                required: "Email Address is required",
            
              })}
            />
            {errors.CPU_Catch && (
              <p className="text-red-600 text-left">
                {errors.CPU_Catch?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              placeholder="photo url"
              className="input input-bordered"
              {...register("photo", {
                required: "Field is required",
             
              })}
            />
            {errors.photo && (
              <p className="text-red-600 text-left">{errors.photo?.message}</p>
            )}
          </div>

          <div>
            {error && <p className="text-left text-red-600">{error}</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
