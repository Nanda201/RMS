import { Carousel } from "react-bootstrap";
import React from "react";

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="content navbar-brand" href="#1">
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
                <a className="content nav-link" href="#2">
                  About Us
                </a>
              </li>
              <li className=" text mt-2">Yellowmirchi restuarant</li>
            </ul>
            <span class="content navbar-text">Order</span>
            <span className="content navbar-text mx-4">Book a Table</span>
          </div>
        </div>
        
      </nav>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            src="Img1.png"
            alt="Second slide"
            width="100%"
            height="580"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            src="Img2.png"
            alt="Third slide"
            width="100%"
            height="580"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block"
            src="Img3.png"
            alt="First slide"
            width="100%"
            height="580"
          />
          <img
            className="d-block"
            src="Img4.png"
            alt="First slide"
            width="100%"
            height="580"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        <div className="row">
          <div className="chef-Img">
            <div className="chef col-6">
        <div className="chefcontent">
        <h1 className=" storyhead text-start">Our Story</h1>
      
      <p className=" text-start">
      Mauris venenatis sapien vitae malesuada sodales. Nam tincidunt quis ipsum et ornare. 
      Curabitur eget lectus ac lorem accumsan lobortis. Vestibulum pellentesque luctus tortor eget consectetur. 
      Donec at fermentum nibh. Donec tristique venenatis blandit. Ut hendrerit, 
      turpis ac fermentum consectetur, risus odio scelerisque dui, in ullamcorper velit urna ut nibh. 
      Sed vestibulum, mauris eu bibendum varius, risus eros interdum ante, 
      quis faucibus enim mi vel est. Nulla quis mollis eros. Maecenas sed odio justo. 
      Nulla porttitor sed nisi non varius. Nunc venenatis felis eget lectus interdum gravida.
      Etiam varius sit amet tortor vitae dictum. Duis vel tortor eget erat rhoncus scelerisque vitae id lorem. 
      Sed in consequat nunc, non tincidunt odio. Donec in ipsum aliquet, 
      sollicitudin massa fermentum, congue nulla. Pellentesque habitant morbi tristique senectus 
      et netus et malesuada fames ac turpis egestas. Nam euismod tellus sem, sed ultricies neque placerat a. 
      In faucibus eros vel eros ullamcorper maximus.
      </p>
    </div>
    </div>
    </div>
    </div>
    
    </div>
  );
}

export default Home;
