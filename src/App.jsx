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


      <section className="hero">
        <p className="hero__short-text">Our mission:</p>
        <p className="hero__long-text">Provide photographers a space to share photos of the neighborhoods they cherish,<span className='hero__long-text__italic'> expressed in their unique style</span>
        </p>
      </section>
      
      <main className="gallery">
        <ul>
          <li className='gallery__item'>
            Image1
          </li>
          <li className='gallery__item'>
            Image2
          </li>
          <li className='gallery__item'>
            Image3
          </li>
          <li className='gallery__item'>
            Image4
          </li>
        </ul>
        <section>
          Main Content
        </section>
      </main>

      <aside>
        Aside Content
      </aside>

      <footer>
        Footer Content
      </footer>
      </div>
    </>
  );
}

export default App
