import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import router from './router';
import '@mantine/core/styles.css';


const App = () => {

  return (
    <>
      <ToastContainer autoClose={5000} position='top-right' />
      <RouterProvider router={router} />
    </>
  )

};

export default App;
