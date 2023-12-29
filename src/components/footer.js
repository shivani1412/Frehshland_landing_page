import React from "react";
import kontrol from "./assets/img/kontrol.png";
import dk from "./assets/img/dk.png";
import mastercard from "./assets/img/mastercard.png";
import visa from "./assets/img/visa.png";
import mobilpay from "./assets/img/mobilepay.png";
function footer() {
  return (
    <>
      <div class="footer container-fluid mt-5">
        <div className="px-5">
          <div className="row listsection">
            <div className="col-sm-3">
              <p className="fw-bold">FRESH.COUNTRY</p>
              <ul className="p-0">
                <li className="nav-link">About us</li>
                <li className="nav-link">Farmers</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <p className="fw-bold">CUSTOMER SERVICE & CONTACT</p>
              <ul className="p-0">
                <li className="nav-link">FAQ</li>
                <li className="nav-link">Complaints</li>
                <li className="nav-link">Media</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <p className="fw-bold">THE LEGAL</p>
              <ul className="p-0">
                <li className="nav-link">Terms and Conditions</li>
                <li className="nav-link">Personal data policy</li>
                <li className="nav-link">Right of withdrawal & Complaints</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <button className="btn change">
                <span className="country">Change country</span>
                <span>
                  <i class="bi bi-globe"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="footericon py-5">
          <div className="imgicon">
            <img src={dk} alt="dk" className="img-fluid"></img>
            <img src={mastercard} alt="mastercard" className="img-fluid"></img>
            <img src={visa} alt="visa" className="img-fluid"></img>
            <img src={mobilpay} alt="mobilpay" className="img-fluid"></img>
          </div>
          <div>
            <ul>
              <li className="nav-link">
                {" "}
                <i class="bi bi-facebook"></i>
              </li>

              <li className="nav-link">
                <i class="bi bi-twitter"></i>
              </li>
              <li className="nav-link">
                <i class="bi bi-instagram"></i>
              </li>
              <li className="nav-link">
                <i class="bi bi-youtube"></i>
              </li>
              <li className="nav-link">
                <i class="bi bi-linkedin"></i>
              </li>
            </ul>
          </div>
          <div>
            <img src={kontrol} alt="" className="img-fluid kontrol"></img>
          </div>
          <div className="text-center">
            <p>
              Fresh.Land © 2022
              <br />
              CVR 43007106
              <br />
              info@fresh.land|53 79 07 07
              <br />
              Indiakaj 20, 2100 Copenhagen Ø 🇩🇰
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default footer;
