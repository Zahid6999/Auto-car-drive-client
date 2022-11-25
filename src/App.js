
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routers/Routers';

function App() {
  return (
    <div className='max-w-[1360px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
