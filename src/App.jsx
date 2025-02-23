import { useState } from 'react'
import {React} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formik } from 'formik';

function NavBar() {
  return(
    <body>
      <header>
        <nav className="nav">

      <div>
        <a href="#brunch" className="nav-left">
          Brunch
        </a>
      </div>
      <ul className="nav-right">
        <li><a href="#welcome" className="welcome">Welcome</a></li>
        <li><a href="#menu" className="menu">Menu</a></li>
        <li><a href="#events" className="events">Events</a></li>
        <li><a href="#contact" className="contact">Contact</a></li>
      </ul>
    </nav>
    <div className="container">
      <p className="head1">Brunch</p>
      <p className="head2">FULL WEBSITE</p>
      <button className="read-more">READ MORE</button>
    </div>
    </header>

    <div className="flavours">
      <div className="content">
      <p className="head">Indian traditional flavours</p>
      <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut odit? Incidunt eius, animi beatae placeat, recusandae repellat id sit magnam nostrum, voluptatem architecto obcaecati eum minima excepturi enim ab!</p>
    </div>
    <div className="img2"></div>
    </div>
    </body>
  )
  
}

export default NavBar
