import React from "react";
import Orange from './assets/img/orange.png'
import Avocado from './assets/img/Avocado.png';
import Clementine from './assets/img/clementin.png';
import Almond from './assets/img/Almonds.png';
function Item() {
    return (
      <>
      <div className="itemscontainer">
        <div className=" fruitsitems">
            <div className="popularitems">
            <h1>Popular Items</h1>
            <p>Order directly from the trees</p>
            </div>
        <div class="row m-0">
      <div class="col-sm-3">
      <div class="card border-0  fruits">
      <img src={Orange} alt="orange" className="mx-4"/>
      <div class="card-body">
        <h5 class="card-title  text-center fw-bolder"style={{fontSize:"15px"}}>Organic Orange (5kg) 🇪🇸</h5>
        <p class="card-text text-center">DKK 139 </p>
        <button type="button" class="btn Basketbtn">ADD TO BASKET</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-0 fruits">
    <img src={Avocado} alt="Avocado" className="mx-4"/>
      <div class="card-body">
        <h5 class="card-title  text-center fw-bolder"style={{fontSize:"15px"}}>Organic Hass Avocado (2kg) 🇪🇸</h5>
        <p class="card-text text-center">DKK 129 </p>
        <button type="button" class="btn Basketbtn">ADD TO BASKET</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-0  fruits ">
    <img src={Clementine} alt="Clementine" className="mx-4"/>
      <div class="card-body">
        <h5 class="card-title  text-center fw-bolder " style={{fontSize:"15px"}}>Organic Clementine <br/>(3kg) 🇪🇸</h5>
        <p class="card-text text-center">DKK 139 </p>
        <button type="button" class="btn Basketbtn">ADD TO BASKET</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-0  fruits">
    <img src={Almond} alt="Almond" className="mx-4"/>
      <div class="card-body">
        <h5 class="card-title  text-center fw-bolder" style={{fontSize:"15px"}}>Organic Almonds (900g)<br></br> 🇵🇹</h5>
        <p class="card-text text-center">DKK 199 </p>
        {/* <a href="name" class="btn Basketbtn mx-2">ADD TO BASKET</a> */}
        <button type="button" class="btn Basketbtn">ADD TO BASKET</button>
      </div>
    </div>
  </div>
</div>
        <div className="allproductsbtn my-5">
         < button type="button" className="btn seebtn fs-4 fw-bolder">SEE ALL PRODUCTS</button> 
       </div>
      </div>
      </div>
   
      </>
    );
  }
  
  export default Item;