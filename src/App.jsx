import { useState } from 'react'
import './App.scss'
import Header from "./componenets/Header/Header";
import Main from "./componenets/Main/Main"

function App() {

  return (
    <>
    <div className="wholePage">
      <Header />
      <Main />
      </div>
    </>
  );
}

export default App
