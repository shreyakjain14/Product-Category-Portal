import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Error from "./components/Error";
import ProductsContainer from "./components/ProductsContainer";
import Body from "./components/Body";
import store from "./utils/store";
import AllCategories from "./components/AllCategories";
import NavBar from "./components/NavBar";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <AllCategories />,
      },
      {
        path: "products",
        element: <ProductsContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <NavBar />
        <RouterProvider router={appRoutes} />
        <ToastContainer />
      </div>
    </Provider>
  );

  // Head
  // Body
  //  SideBar
  //    MenuItems
  //  MainContainer
  //    MainHead
  //    CategoriesContainer
  //       CategoriesCard
  //    Seperator
  //    SubCategoriesContainer
  //      SubCategoriesCard
  //  Products Page
  //    MainHead
  //    ProductsContainer
  //      ProductsCard
  // Cart
}

export default App;
