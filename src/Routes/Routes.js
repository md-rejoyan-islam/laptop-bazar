import Blog from "../Pages/Blog/Blog";
import BuyerList from "../Pages/Dashboard/Dashboard/BuyerList/BuyerList";
import ConfirmProducts from "../Pages/Dashboard/Dashboard/ConfirmProduct/ConfirmProducts";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AllProducts from "../Pages/Dashboard/Dashboard/SalerAllProduct/AllProducts";
import AddProduct from "../Pages/Dashboard/Dashboard/SellerAddProduct/AddProduct";
import SellerList from "../Pages/Dashboard/Dashboard/SellerList/SellerList";
import FavoriteProduct from "../Pages/Dashboard/FavoriteProductsList/FavoriteProduct";
import Favorite from "../Pages/Favorite/Favorite";
import Home from "../Pages/Home/Home";
import SingleProducts from "../Pages/Home/SingleProduct/SingleProducts";
import DashBoardLayouts from "../Pages/Layouts/DashboardLayouts/DashBoardLayouts";
import Main from "../Pages/Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ReviewOrder from "../Pages/ReviewOrder/ReviewOrder";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";




const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/favorite",
        element: <Favorite></Favorite>,
      },
      {
        path: "/review-order",
        element: <ReviewOrder></ReviewOrder>,
      },
      {
        path: "/products/:id",
        element: <SingleProducts></SingleProducts>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-rejoyan-islam-rejoyanislam.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoardLayouts>
          <Dashboard></Dashboard>
        </DashBoardLayouts>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/buyer-favorite",
        element: <FavoriteProduct></FavoriteProduct>,
      },
      {
        path: "/dashboard/buyer-confirm",
        element: <ConfirmProducts></ConfirmProducts>,
      },
      {
        path: "/dashboard/seller-all-product",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/dashboard/seller-add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/buyer-list",
        element: <BuyerList></BuyerList>,
      },
      {
        path: "/dashboard/seller-list",
        element: <SellerList></SellerList>,
      },
    ],
  },
]);
export default router;
