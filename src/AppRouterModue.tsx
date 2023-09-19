import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import HomePage from "./components/pages/HomePage";

const AppRouterModule = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    //   loader: <p>loading</p>,
    },
    {
      path: "/home",
      //   loader: <p>loading</p>,
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouterModule;
