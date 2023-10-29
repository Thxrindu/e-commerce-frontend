import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import './App.scss';
import Routes from './routes';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        className='toastify-container'
        toastClassName='toastify-toast'
        hideProgressBar
      />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
