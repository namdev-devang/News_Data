import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from "react";
import "./App.css";
import Navmenu from "./Component/Navmenu/Navmenu";
import NewsData from "./Component/NewsData/NewsData";
import Page404 from './Page404/Page404';

function App() {
  return (
    <>
      <div className="App">
          <div className="Container mx-auto max-w-screen-xl py-4">
          <Navmenu />
           <BrowserRouter>
            <Routes>
             <Route path='*' element={<Page404/>} />
             <Route path='/' element={<NewsData/>}/>
            </Routes>
           </BrowserRouter>
          </div>
      </div>
    </>
  );
}

export default App;
