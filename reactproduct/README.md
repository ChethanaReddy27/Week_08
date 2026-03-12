import {createBrowserRouter, RouterProvider} from 'react-router'
import RootLayout from './components/routelayout.jsx';
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Nodejs from './components/Nodejs.jsx'
import Java from './components/Java.jsx'
import Vue from './components/Vue.jsx'
import Technologies from './components/Technologies.jsx'
function App()
{
  const routingObj=createBrowserRouter([
   { path:"/",
    element:<RootLayout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"Technologies",
        element:<Technologies/>,
        children:[
          {
          path:"java",
          element:<Java/>
          },
          {
          path:"Nodejs",
          element:<Nodejs/>
          },
          {
          path:"Vue",
          element:<Vue/>
          },
          {
          path:"/",
          element:<Navigate to='java'/>

          }
        ]
      },
    ]
   }
  ])
  return <RouterProvider router={routingObj}/>;
}
export default App;