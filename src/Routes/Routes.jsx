import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard/Dashboard";
import StudentCart from "../pages/Dashboard/StudentCart/StudentCart";
import Error from "../pages/Shared/Error/Error";
import ManageUsers from "../Layout/Dashboard/ManageUsers/ManageUsers";
import AdItem from "../Layout/Dashboard/AdItem/AdItem";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Layout/Dashboard/ManageClasses/ManageClasses";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'class',
          element: <Classes></Classes>
        },
        {
          path: 'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'studentcart',
          element: <StudentCart></StudentCart>
        },
    
        {
          path: 'users',
          element: <ManageUsers></ManageUsers>
        },
        {
           path: 'classes',
           element: <ManageClasses></ManageClasses>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AdItem></AdItem></AdminRoute>
        }
       
      ]
    }
  ]);