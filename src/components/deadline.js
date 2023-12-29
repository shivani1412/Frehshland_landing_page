import React from "react";

function deadline() {
  return (
    <>
      <div className="deadline">
        <div className="deadlinetime">
          <h2 className="text-center fw-800">Next order deadline</h2>
          <div class="container">
            <div class="row  time ">
              <div class="col  text-end">
                <span style={{ marginRight: "-1.5rem" }}>0:</span>
              </div>
              <div class="col">
                <span>10:</span>
              </div>
              <div class="col">
                <span style={{ marginLeft: "-1.5rem" }}>12</span>
              </div>
            </div>
            <div class="row ">
              <div class="col text-end">DAYS</div>
              <div class="col text-center">HOURS</div>
              <div class="col text-left">MINUTES</div>
            </div>
          </div>
        </div>
      </div>
      {/* Freight */}
      <div className="Freight">
        <div className="px-2 py-3">
         <div className="Freightheading text-center">
            <h1>Freight</h1>
            <p>We deliver to Jutland and the fixed islands as well as Bornholm</p>
         </div>
         <div class="container text-center my-5  ">
                <div class="row gap-5 deleivery" style={{marginLeft:"12rem"}}>
                    <div class="col-sm-3 border rounded ">
                    <h3>DKK 60</h3>
                    <p>With simple delivery</p>
                    </div>
                    <div class="col-sm-3 border rounded ">
                    <h3>DKK 30</h3>
                    <p>By subscription</p>
                    </div>
                    <div class="col-sm-3 border rounded">
                    <h3>For free</h3>
                    <p>When ordering &gt; DKK 699.</p>
                    </div>
                </div>
                </div>
         </div>
      </div>
    </>
  );
}

export default deadline;
