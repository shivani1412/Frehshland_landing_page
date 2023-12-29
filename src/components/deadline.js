import React from "react";

function deadline() {
  return (
    <>
      <div className="deadline py-5">
        <div>
          <h2
            className="text-center"
            style={{ color: "#666", fontWeight: "700" }}
          >
            Next order deadline
          </h2>
        </div>
        <div className="countdown">
          <div>
            <div className="digit" id="days">
              0:
            </div>
            <div className="label">Days</div>
          </div>

          <div>
            <div className="digit" id="hours">
              10
            </div>
            <div className="label">Hours</div>
          </div>

          <div>
            <div className="digit " id="minutes">
              :12
            </div>
            <div className="label">Minutes</div>
          </div>
        </div>
      </div>
      {/* Freight */}
      <div className="Freight">
        <div className="px-2 py-3">
          <div className="Freightheading text-center">
            <h1>Freight</h1>
            <p>
              We deliver to Jutland and the fixed islands as well as Bornholm
            </p>
          </div>
          <div class="container text-center my-5  ">
            <div class="row gap-5 deleivery" style={{ marginLeft: "12rem" }}>
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
