import React from "react";
import potatos from './assets/img/potatoes.png'
import Applechowder from './assets/img/applechowder.png';
import seasonalbox from './assets/img/seasonalbox.png';
import orangevip from './assets/img/orange vip.png';
import passion from './assets/img/passion fruit.png';
import Asparagus from './assets/img/Asparagus.png';
import Mathilde from './assets/img/Mathilde.png';
function seasonal (){


    return(
        <>
        <div className="seasonal">
        <div className="itemscontainer">
        <div className=" fruitsitems">
            <div className="popularitems">
            <h1>Seasonal goods</h1>
            <p>Get the taste of the season delivered right to your door</p>
            </div>
        <div class="row m-0">
      <div class="col-sm-3">
      <div class="card border-0  fruits">
      <img src={potatos} alt="orange" className="mx-4"/>
      <div class="card-body">
        <h5 class="card-title  text-center fw-bolder"style={{fontSize:"15px"}}>Organic Orange (5kg) 🇪🇸</h5>
        <p class="card-text text-center">DKK 139 </p>
        <button type="button" class="btn Basketbtn">ADD TO BASKET</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-0 fruits">
    <img src={Applechowder} alt="Applechowder" className="mx-4"/>
      <div class="card-body">
        <h5 class="card-title  text-center fw-bolder"style={{fontSize:"15px"}}>Organic Hass Avocado (2kg) 🇪🇸</h5>
        <p class="card-text text-center">DKK 129 </p>
        <button type="button" class="btn Basketbtn">ADD TO BASKET</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card border-0  fruits ">
    <img src={seasonalbox} alt="seasonalbox" className="mx-4"/>
      <div class="card-body">
        <h5 class="card-title  text-center fw-bolder " style={{fontSize:"15px"}}>Organic Clementine <br/>(3kg) 🇪🇸</h5>
        <p class="card-text text-center">DKK 139 </p>
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
         
      <div>
          <div className=" fruitsitems delicious border rounded">
            <div className="text-center text-white">
                <h1>Get delicious benefits as a VIP!</h1>
                <p className="px-5">When you sign up for one or more of our VIP lists, you get exclusive news about the season's new products. Best of all, you get the opportunity to order the new fruits and vegetables, 24 hours before everyone else - and it's even completely free to be a member!</p>
            </div>
            <div className="container overlayimg my-5">
             <div className="row">
              <div className="col-sm-4 colheight">
                <img src={orangevip} alt="" className="img-fluid"></img>
                <div className="overlaydiv">
                <div className="text-center overlay-content">
                    <h3>Orange VIP<br/> List</h3>
                    <p>sign up here</p>

                </div>
                </div>
                
              </div>
              <div className="col-sm-4 colheight passionimg">
                <img src={passion} alt="" className="img-fluid" style={{width:"100%"}}></img>
                <div className="overlaydiv overlaypassion">
                <div className="text-center overlay-content">
                    <h3>Passion fruit <br/> VIP List</h3>
                    <p>sign up here</p>

                </div>
                </div>
              </div>
              <div className="col-sm-4 colheight Asparagusimg">
              <img src={Asparagus} alt="" className="img-fluid"></img>
              <div className="overlaydiv Asparagus">
                <div className="text-center overlay-content">
                    <h3>Asparagus VIP <br/>  List</h3>
                    <p>sign up here</p>

                </div>
                </div>
              </div>
             </div>
            </div>
            <div className="allproductsbtn ">
         < button type="button" className="btn seebtn  fw-bolder bg-white text-secondary" >SEE ALL OUR VIP LIST</button> 
       </div>
          </div>
          </div>

          <div className="fruitsitems">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                    <img src={Mathilde} alt="Mathilde" className="img-fluid"></img>
                    <div className="enable_content">
                      <p>click to accept marketing cookies and enable this content</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h1 className="Commonfront">Common front</h1>
                    <p>We can all help make a difference and future-proof our food system by buying fruit and vegetables directly from the farmer.</p>
                    <p>Thank you to Tomorrow for focusing on the solutions that will future-proof our society and help us to stand stronger in the climate and food crisis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
        </>
    )
}
export default seasonal;