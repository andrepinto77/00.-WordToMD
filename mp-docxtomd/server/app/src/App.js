import { FileUploader } from './components/FileUploader/FileUploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

function App() {

 
  return (
    <div className="App">
      <FileUploader />
      <ToastContainer />
      
    </div>
  );
}

export default App;
