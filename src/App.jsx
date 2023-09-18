import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './pages/Landing';
import Browsing from './pages/Browsing';
import Description from './pages/Description';
import Checkout from './pages/Checkout';
import LogIn from './pages/LogIn';

const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/Browsing', element: <Browsing /> },
  { path: '/Description', element: <Description /> },
  { path: '/Checkout', element: <Checkout /> },
  { path: '/LogIn', element: <LogIn /> }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
