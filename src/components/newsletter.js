import React from "react";
import seasonproduct from "./assets/img/seasonproduct.png";
import contactimg from "./assets/img/contactimg.png";
function newsletter() {
  return (
    <>
      <div className="newsletter py-4">
        <div>
          <div className="text-center">
            <h2 className="subscribe">Subscribe to newsletter</h2>
            <p>Get notified when your favorite product is in season</p>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={seasonproduct}
                  alt="seasonproduct"
                  className="img-fluid seasonproduct"
                ></img>
              </div>
              <div className="col-sm-6">
                <div className="inputfeildcol">
                  <div className="mb-3">
                    <label
                     htmlFor="exampleFormControlTextarea1"
                      className="form-label fw-bolder"
                    >
                      First Name
                    </label>
                    <input
                      type="name"
                      className="form-control py-3"
                      id="exampleFormControlInput1"
                      placeholder=" Your First Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label fw-bolder"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control py-3"
                      id="exampleFormControlInput1"
                      placeholder="Your Email"
                    />
                  </div>

                  <p>
                    I would like to receive e-mails and SMS/calls from
                    Fresh.land with marketing about Fresh.land and their product
                    range , events, competitions, and about their Less Waste
                    Friendships initiatives with business partners and I accept
                    that my information is processed for this purpose.{" "}
                  </p>
                  <p>
                    The consent may also be used to ask me if I wish to extend
                    my consent in relation to the marketing and/or data
                    protection rules. You can always revoke your consent, see
                    how here . You can read in our personal data policy how we
                    process information about you.
                  </p>
                  <div className="registerbtn">
                    <button className="btn ">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Contact py-4">
          <div className="text-center">
            <h2>Contact</h2>
            <p>Phone and email</p>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="col-sm ">
                <img
                  src={contactimg}
                  alt="contactimg"
                  className="img-fluid contactimg border"
                ></img>
              </div>
              <div className="col-sm py-5">
                <div className="border px-4 py-3 rounded my-3 Monday">
                  <h2>53 79 07 07</h2>
                  <p>
                    Monday-Friday:08-20:00
                    <br />
                    Saturday: 09-15:00
                    <br />
                    Sunday: Closed
                  </p>
                </div>
                <div className="border px-4 py-3 rounded my-3 Monday">
                  <h2>info@fresh.land</h2>
                  <p>We endeavor to respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default newsletter;
