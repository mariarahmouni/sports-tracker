import './App.css';
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import router from './router';

const App = () => (
  <>
    <ToastContainer autoClose={5000} position='top-right' />
    <RouterProvider router={router} />
  </>
  
);

export default App;
