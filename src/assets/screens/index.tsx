import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './content/About';
import Home from './content/Home';
import Project from './content/Project';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/project',
    element: <Project />,
  },
])

export default () => {

 return (
    <RouterProvider router={router}/>
 );
}
