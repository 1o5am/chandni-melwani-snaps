import { useState } from 'react'
import './App.scss'
import Header from "./componenets/Header/Header";
import MainPage from "./componenets/pages/MainPage/MainPage"
import PhotoPage from './componenets/pages/PhotoPage/PhotoPage';
import Hero from "./componenets/Hero/Hero"
import Footer from './componenets/Footer/Footer';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

function App() {

  const [filterOpen, setFilterOpen] = useState(false);

  const isPhotoPage = location.pathname.startsWith('/photo');

  return (
    <BrowserRouter>
    <Header filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
    {!isPhotoPage && <Hero />}
    <Routes>
      <Route path="/" element={ <MainPage filterOpen={filterOpen} />} />
      <Route path="/photo" element={ <PhotoPage />} />
      <Route path="/photo/:photoId" element={ <PhotoPage /> } />
      <Route path ="/*" element={<Navigate to="/" />} />
    </Routes>
      <div className="wholePage"></div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
