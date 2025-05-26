import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Books from './features/books/Books';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/books', element: <Books /> },
  { path: '/cart', element: <Cart /> },
  { path: '/order/new', element: <CreateOrder /> },
  { path: '/order/:orderId', element: <Order /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
