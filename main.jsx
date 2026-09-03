import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  {/*เพิ่มส่วนนี้*/}
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/*เพิ่มส่วนนี้*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

