import React from "react";
import Header from "./Header";
import Products from "./Products";
import { Container, Row, Col } from "reactstrap";

function Home() {
  return (
    <div className="home">
      <Header />
      <img
        src="\images\61USQwqEHkL._SX1500_.jpg "
        alt=" "
        className="home_image"
      />

      <Row className="div_row">
        <Col lg="5" md="5" sm="12">
          <Products
            id="1"
            title="DASH Tasti-Crisp™ Digital Air Fryer with AirCrisp Technology, Custom Presets, Temperature Control, and Auto Shut Off Feature, 2.6 Quart - Aqua"
            price={49}
            rating={5}
            image="\images\71TYYJDUvgL._AC_SX569_.jpg"
          />
        </Col>
        <Col lg="5" md="5" sm="12">
          <Products
            id="2"
            title="Dowinx Gaming Chair Fabric with Pocket Spring Cushion, Massage Game Chair Cloth with Headrest, Ergonomic Computer Chair with Footrest 290LBS, Light Grey"
            price={249}
            rating={4}
            image="\images\71UCPSRkNdL.__AC_SX300_SY300_QL70_FMwebp_.webp"
          />
        </Col>
      </Row>

      <Row className="div_row">
        <Col lg="3" md="5" sm="12">
          <Products
            id="3"
            title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light
            "
            price={23}
            rating={3}
            image="\images\61CGHv6kmWL.__AC_SX300_SY300_QL70_FMwebp_.webp"
          />
        </Col>
        <Col lg="4" md="5" sm="12">
          <Products
            id="3"
            title="Redragon Gaming Mouse, Wireless Mouse Gaming with 8000 DPI, PC Gaming Mice with Fire Button, RGB Backlit Programmable Ergonomic Mouse Gamer"
            price={30}
            rating={4}
            image="\images\61QY3V6A-NL.__AC_SX300_SY300_QL70_FMwebp_.webp"
          />
        </Col>
        <Col lg="3" md="5" sm="12">
          <Products
            id="5"
            title="The Great Disappearance: 31 Ways to be Rapture Ready"
            price={56}
            rating={2}
            image="\images\41hc-E-3b3L._SY445_SX342_.jpg"
          />
        </Col>
      </Row>
      <Row className="div_row">
        <Col lg="10" md="10" sm="10">
          <Products
            id="6"
            title="Amazon Fire TV 50 4-Series 4K UHD smart TV, stream live TV without cable"
            price={260}
            rating={4}
            image="\images\51QBHKpw5dL._AC_SX569_.jpg"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
