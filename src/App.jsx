import { useState } from 'react'
import './App.scss'
import Header from "./componenets/Header/Header";
import Main from "./componenets/Main/Main"
import Hero from "./componenets/Hero/Hero"

function App() {

  return (
    <>
    <div className="wholePage">
      <Header />
      <Hero />
      <Main />
      </div>
    </>
  );
}

export default App
