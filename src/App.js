import React from 'react'
import '@fontsource/work-sans'
//import { Counter } from './features/counter/Counter'
import './styles/App.css'
import Home from './pages/Home/Home'
import Overview from './pages/Overview/Overview'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import References from './pages/References/References'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <Overview />
      {/* <Overview />
      <About />
      <Services />
      <References />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App

/*  <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */
