import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';

const Products = ({products}) => {
    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";
    const navigate = useNavigate();
  const { user } = useContext(AuthContext);
    const addFavorite=(product)=>{

      if(!user){
        
        return navigate(from, { replace: true });
      }
      const favProduct = {
        sellerEmail:user.email,
        title: product.title,
        model: product.model,
        RAM : product.RAM,
        price :product.price,
        processor:product.processor,
        Generation:product.Generation,
        id:product._id,
        photo:product.photo
      };
      fetch(
        `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/favoriteProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(favProduct),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success("product add to  favorite list ");
          console.log(data);
        });
    }

    return (
      <div className="grid lg:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1">
        {products.map((product, index) => (
          <div className="card  bg-white shadow-xl" key={index}>
            <figure>
              <img src={product.photo} alt="Shoes" />
            </figure>
            <div className="card-body text-left ">
              <Link
                to={`/products/${product._id}`}
                className="hover:text-red-500"
              >
                <h2 className="card-title">{product.title}</h2>
              </Link>
              <li className="list-inside">Band: {product.band}</li>
              <li className="list-inside">Processor:{product.processor} </li>
              <li className="list-inside">Ram:{product.RAM} </li>
              <h2>
                {product.price} <b className="font-black text-2xl">৳</b>{" "}
              </h2>{" "}
              {/* `/products/${product._id}` */}
              <div className="card-actions justify-center">
                <Link
                  to={ user ? `/products/${product._id}` : '/login' }
                  className="w-full btn btn-primary"
                >
                  Buy Now
                </Link>
                <button
                  className="w-full btn btn-outline"
                  onClick={() => addFavorite(product)}
                >
                  Add to Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Products;