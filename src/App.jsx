import { useState } from 'react'
import './App.scss'
import Header from "./componenets/Header/Header";
import Main from "./componenets/Main/Main"
import Hero from "./componenets/Hero/Hero"
import Footer from './componenets/Footer/Footer';

function App() {

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <div className="wholePage">
        <Header filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
        <Hero />
        <Main filterOpen={filterOpen}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
