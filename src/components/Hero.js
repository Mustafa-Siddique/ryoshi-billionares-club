import React from "react";
import { Button } from "react-bootstrap";
import heroImg from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <div className="hero-main">
      <div className="row">
        <div className="col-md-4">
          <h1>
            Get your Ryoshi NFT
            <br />
            <span>4444/4444</span>
            <br />
            Release
          </h1>
          <div
            className="position-relative mb-4 d-block mx-auto"
            style={{ width: "fit-content" }}
          >
            <select className="form-select" aria-label="Default select example">
              <option selected value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
            <span className="custom-arrow"></span>
          </div>
          <Button
            href="#link"
            className="btnMint mx-auto d-block"
            variant="outline-warning"
          >
            MINT
          </Button>
        </div>
        <div className="col-md-8 text-center">
          <img className="heroImg" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}
