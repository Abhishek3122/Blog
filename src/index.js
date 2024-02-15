import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Layouts from './components/Layouts';
import Home from './pages/Home';
import PostsDetails from './pages/PostsDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Authors from './pages/Authors';
import UserProfile from './pages/UserProfile';
import Authorposts from './pages/Authorposts';
import Logout from './pages/Logout';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import CategoryPosts from './pages/CategoryPosts';
import DashBoard from './pages/DashBoard';
import DeletePost from './pages/DeletePost';
//Routing of different web pages 
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layouts/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Home/>},
      {path:"posts/:id",element:<PostsDetails/>},
       {path:"register",element:<Register/>},
       {path:"login",element:<Login/>},
       {path:"profile/:id",element:<UserProfile/>},
       {path:"authors",element:<Authors/>},
       {path:"create",element:<CreatePost/>},
       {path:"posts/categories/:category",element:<CategoryPosts/>},
       {path:"posts/users/id",element:<Authorposts/>},
       {path:"myposts/:id",element:<DashBoard/>},
       {path:"posts/:id/edit",element:<EditPost/>},
       {path:"logout",element:<Logout/>},
       
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);


