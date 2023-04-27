import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './routes/About';
import Home from './routes/Home';
import Project from './routes/Project';
import Contact from './routes/Contact';

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
