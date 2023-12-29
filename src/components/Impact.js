import React from "react";
import solarimpuls from './assets/img/solarimpuls.png';
import mission from './assets/img/mission.png';
function Impact() {
    return (
      <>
      <div className="impact">
      <div className="container mx-1">
       <div className="row">
        <div className="col-sm-12 ">
          <div className="row ">
            <div className="col-sm-4 ">
                <img src={solarimpuls} alt="solarimpuls" className="img-fluid solarimpuls"></img>
            </div>
            <div className="col-sm-7 py-2 px-5 ">
                <h6 className="fw-800" style={{color:"#23395d"}}>Solar Impulse (2021)</h6>
                <p>Our LCA mapping of the avocado's journey and climate footprint has been validated by the Solar Impulse Foundation, which has selected Fresh.Land as one of 1000 leading solutions for a greener future. Three experts from the Solar Impulse Foundation have verified that Fresh.Land's avocados from our Spanish farmers emit 46% less greenhouse gases than conventional alternatives in Denmark.</p>
            </div>
          </div>
          <hr style={{width:"75%", marginLeft:"17rem"}}></hr>
        </div>
       </div>
       <div className="row my-4">
        <div className="col-sm-12">
        <div className="row">
            <div className="col-sm-4">
                <img src={mission} alt="mission" className="img-fluid mission"></img>
            </div>
            <div className="col-sm-7 py-2 px-5">
                <h6 style={{color:"#23395d"}}>Mission Innovation (2021)</h6>
                <p>At the UN climate summit COP26, Fresh.Land was presented as one of 20 solutions with the potential to contribute to the Paris Agreement's goal of 1.5 °C increase and a potential reduction in greenhouse gas emissions in the order of 10 Mt CO2e/year in 2030, if the solution accounted for 20% of the market.</p>
            </div>
          </div>
        </div>
       </div>

       <div className="allproductsbtn my-5">
         < button type="button" className="btn  IMPACT-REPORT fs-4 fw-bolder">IMPACT REPORT</button> 
       </div>
      </div>
      </div>
   
      </>
    );
  }
  
  export default Impact;