import { useState } from 'react'
import './App.scss'
import Header from "./componenets/Header/Header";
import Main from "./componenets/Main/Main"
import Hero from "./componenets/Hero/Hero"

function App() {

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
    <div className="wholePage">
      <Header filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
      <Hero />
      <Main filterOpen={filterOpen}/>
      </div>
    </>
  );
}

export default App;
