import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Books, { bookLoader } from './features/books/Books';
import Cart from './features/cart/Cart';
import CreateOrder, { newOrderAction } from './features/order/CreateOrder';
import Order, { orderLoader } from './features/order/Order';
import Layout from './components/Layout';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/books',
        element: <Books />,
        loader: bookLoader,
        errorElement: <Error />
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder />, action: newOrderAction },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
