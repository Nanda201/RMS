import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import OrderFood from './OrderFood'
import Home from './Home';
import BookATable from './BookATable';
import Contact from './Contact';
import CreateOrderAccount from './CreateOrderAccount';
import CreateBookTableAccount from './CreateBookTableAccount';

function NavComponent() {
    return (
        <div className='container-fluid p-0'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="content navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="content nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className=" text mt-2">Yellowmirchi restuarant</li>
            </ul>
            <a href="/coa" className="content navbar-brand"><span class="content navbar-text">Order</span></a>
            <a href="/cbta" className="content navbar-brand"><span className="content navbar-text mx-4">Book a Table</span></a>
          </div>
        </div>

      </nav>
      <BrowserRouter>
                <Link  to="/order"></Link>
                <Link  to="/"></Link>
                <Link  to="/booktable"></Link>
                <Link to="/contactus"></Link>
                <Link to="/coa"></Link>
                <Link to="/cbta"></Link>
                <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/order" element={<OrderFood/>}/>
                <Route path="/booktable" element={<BookATable/>}/>
                <Route path='/contactus' element={<Contact/>}/>
                <Route path='/coa' element={<CreateOrderAccount/>}/>
                <Route path='/cbta' element={<CreateBookTableAccount/>}/>
                
            </Routes>
            </BrowserRouter>
        </div >

    )
}

export default NavComponent;
