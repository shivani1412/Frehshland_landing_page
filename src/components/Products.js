import React,{useState} from "react";
import Orange from "./assets/img/orange.png";
import Orangeturban from './assets/img/orangeturban.png';
import Orangefruit from './assets/img/orangefruit.png';
import Navbar from "./Navbar";
function Product() {
  const [plus, setPlus] = useState('1');

  return (
    <>
       <Navbar />
   <div className=" detail-container">
  <div className="row aadproduct-detail">
    <div className="col-sm-4 ">
      <img src={Orange} alt="" className="img-fluid"></img>
    </div>
    <div className="col-sm-7">
     <div className="ProductDeatils">
        <div className="Organic">
        <h1>Organic Orange (5kg) 🇪🇸</h1>
        <p className="fs-5 fw-bold Dkk">Dkk 139</p>
        </div>
        <div className="sun-ripened my-4">
            <p>20-24 delicious, sun-ripened oranges 🍊</p>
            <p>Store cool and airy at 7-10°C 🌡️</p>
            <p>Lasts up to three weeks 🏡</p>
        </div>
        <hr/>
        <div>
            <p>⏰ Order before Wednesday at 24:00 and have your items delivered directly to your<br/> door the following week 🚛</p>
            <p>📦 Free shipping when ordering over DKK 699</p>
        </div>
        <div className="my-5 mx-3">
            <div className="form-check py-2">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                   One time purchase
                  </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
             Subscribe
            </label>
        </div>
        </div>

       <div className="numberbtn">
       <div className="number">
       <span
              className="minus"
              
            >
              -
            </span>
            
             <input value={plus} onChange={e => setPlus(e.target.value)}   className="inputplus" />
            <span
              className="plus"
            
            >
              +
            </span>
      </div>
       <button type="button" className="btn ">Add to basket</button>
       </div>
       <div className="my-4  mx-2 Category">
        <span className="d-block">Item Number sku(sku):F55</span>
        <span>Category:Fruit</span>
        <p></p>
       </div>
     </div>
    </div>
  </div>
</div>
  
  <div className="container">
    <ul className="description">
    <li><a href="decription">Description</a></li>
    <li className="border-0 mx-3"><a href="decription">More info</a></li>
    </ul>
  </div>
  <div className="container-fulid">
   <div className="conatiner">
   
      <div className="px-5 py-4 turban">
        <h2>The right orange in your turban 🍊</h2>
        <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
       <p className="fw-bold Nave">Navelina</p>
       <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
       <p className="fw-bold Nave">Nave Late</p>
       <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
       <p><img src={Orangeturban} alt="" className="img-fluid"></img></p>
       <p className="fw-bold">Storage</p>
       <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
       <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
       <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
      <p className="fw-bold">Season</p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature  making it over 2000 years old.</p>
      <ul>
        <li>October-January: Navelina</li>
        <li>January-April: Nave Late & Lane Late</li>
        <li>April-august: Valencia Late</li>
      </ul>
      <p><img src={Orangefruit} alt="" className="Orangefruit"></img></p>
      <div className="related-items">
          <h1>Related items</h1>
          
          <div className="row my-4" style={{marginLeft:"-34px"}}>
            <div className="col-sm-3">
           
              <div className="card border-0  fruits ">
                <img src={Orange} alt="orange" className="mx-4" />
                <div className="card-body">
                  <h5
                    className="card-title  text-center fw-bolder"
                    style={{ fontSize: "15px" }}
                  >
                  </h5>
                  <p className="card-text text-center"></p>
                  <button type="button" className="btn Basketbtn">
                    ADD TO BASKET
                  </button>
                </div>
              </div>
              
            </div>
            <div className="col-sm-3">
           
              <div className="card border-0  fruits ">
                <img src={Orange} alt="orange" className="mx-4" />
                <div className="card-body">
                  <h5
                    className="card-title  text-center fw-bolder"
                    style={{ fontSize: "15px" }}
                  >
                  </h5>
                  <p className="card-text text-center"></p>
                  <button type="button" className="btn Basketbtn">
                    ADD TO BASKET
                  </button>
                </div>
              </div>
              
            </div>
            <div className="col-sm-3" >
           
              <div className="card border-0  fruits ">
                <img src={Orange} alt="orange" className="mx-4" />
                <div className="card-body">
                  <h5
                    className="card-title  text-center fw-bolder"
                    style={{ fontSize: "15px" }}
                  >
                     
                  </h5>
                  <p className="card-text text-center"></p>
                  <button type="button" className="btn Basketbtn">
                    ADD TO BASKET
                  </button>
                </div>
              </div>
              
            </div>
            <div className="col-sm-3">
           
              <div className="card border-0  fruits ">
                <img src={Orange} alt="orange" className="mx-4" />
                <div className="card-body">
                  <h5
                    className="card-title  text-center fw-bolder"
                    style={{ fontSize: "15px" }}
                  >
                  
                  </h5>
                  <p className="card-text text-center"></p>
                  <button type="button" className="btn Basketbtn">
                    ADD TO BASKET
                  </button>
                </div>
              </div>
              
            </div>
           
          </div>
        </div>
   
      </div>
            {/* related items */}
         
   </div>
  </div>
    </>
  );
}
export default Product;