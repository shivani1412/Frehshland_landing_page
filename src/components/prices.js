import React from "react";
import jury from "./assets/img/jury.png";
import fao from "./assets/img/fao.png";
import sdg from "./assets/img/sdg.png";
import climate from "./assets/img/climate.png";
function prices() {
  return (
    <>
      <div className="prices">
        <div className="text-center">
          <h1>Prices</h1>
          <p>Our model has received several prestigious awards</p>
        </div>
        <hr className="hr"></hr>
        <div className="pricescol">
          <div>
            <img src={jury} alt="jury" className="img-fluid juryimg"></img>
          </div>
          <div className="nation">
            <p>
              <strong>United Nations Good For All Winner (2021)</strong>
              <br />
              The jury selected Fresh.Land as one of the 50 winners out of 2,000
              finalists based on our contribution to a better food system.
            </p>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="pricescol">
          <div>
            <img src={fao} alt="fao" className="img-fluid juryimg"></img>
          </div>
          <div className="nation">
            <p>
              <strong>United Nations Good For All Winner (2021)</strong>
              <br />
              The jury selected Fresh.Land as one of the 50 winners out of 2,000
              finalists based on our contribution to a better food system.
            </p>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="pricescol">
          <div>
            <img src={sdg} alt="sdg" className="img-fluid juryimg"></img>
          </div>
          <div className="nation">
            <p>
              <strong>United Nations Good For All Winner (2021)</strong>
              <br />
              The jury selected Fresh.Land as one of the 50 winners out of 2,000
              finalists based on our contribution to a better food system.
            </p>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="pricescol">
          <div>
            <img
              src={climate}
              alt="climate"
              className="img-fluid juryimg"
            ></img>
          </div>
          <div className="nation">
            <p>
              <strong>United Nations Good For All Winner (2021)</strong>
              <br />
              The jury selected Fresh.Land as one of the 50 winners out of 2,000
              finalists based on our contribution to a better food system.
            </p>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="politiken">
          <div>
            <h1 className="fs-3 text-decoration-underline text-dark link-underline-danger">
              POLITIKEN
            </h1>
            <p>Box check: fresh and good</p>
          </div>
          <div>
            <h1 className="fs-3">Berlingske</h1>
            <p>The avocados of my life</p>
          </div>
          <div>
            <h1 className="fs-3 text-dark fw-100">brandeins</h1>
            <p>The Avocado Connection</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default prices;
