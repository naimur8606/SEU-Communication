import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Messages from "../Pages/Messages/Messages";
import Notification from "../Pages/Notification/Notification";
import Search from "../Pages/Search/Search";
import Login from "../Pages/Registration&Login/Login";
import RegistrationUser from "../Pages/Registration&Login/RegistrationUser";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout> ,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/messages',
            element: <Messages></Messages>
        },
        {
            path:'/notification',
            element: <Notification></Notification>
        },
        {
            path:'/search',
            element: <Search></Search>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/registration',
      element:<RegistrationUser></RegistrationUser>
    }
  ]);

export default router;