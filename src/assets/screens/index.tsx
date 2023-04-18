import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './content/About';
import Home from './content/Home';
import Project from './content/Project';
import Contact from './content/Contact';

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
  {
    path: '/contact',
    element: <Contact />,
  },
])

export default () => {

 return (
    <RouterProvider router={router}/>
 );
}
