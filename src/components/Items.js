import React ,{useState, useEffect}from "react";
import Orange from "./assets/img/orange.png";
import Almond from "./assets/img/Almonds.png";
import { Link } from "react-router-dom";
import Seasonal from "./seasonal";
import Deadline from "./deadline";

function Item() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://shivani.local/wp-json/custom/v1/products");

        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="itemscontainer">
        <div className=" fruitsitems">
          <div className="popularitems">
            <h1>Popular Items</h1>
            <p>Order directly from the trees</p>
          </div>
          <div className="row m-0">
          {products.map((product) => (
            <div className="col-sm-3"  key={product.id}>
           
              <div className="card border-0  fruits ">
              <Link to="/product-detail">
                <img src={Orange} alt="orange" className="mx-4" />
                </Link>
                <div className="card-body">
                  <h5
                    className="card-title  text-center fw-bolder"
                    style={{ fontSize: "15px" }}
                  >
                     {product.title}
                  </h5>
                  <p className="card-text text-center">{product.price}</p>
                  <button type="button" className="btn Basketbtn">
                    ADD TO BASKET
                  </button>
                </div>
              </div>
            </div>
          ))}
            <div className="col-sm-3">
              <div className="card border-0  fruits">
              <Link to="/product-detail">
                <img src={Almond} alt="Almond" className="mx-4" />
                </Link>
                <div className="card-body">
                  <h5
                    className="card-title  text-center fw-bolder"
                    style={{ fontSize: "15px" }}
                  >
                    Organic Almonds (900g)<br></br> 🇵🇹
                  </h5>
                  <p className="card-text text-center">DKK 199 </p>
                  {/* <a href="name" class="btn Basketbtn mx-2">ADD TO BASKET</a> */}
                  <button type="button" className="btn Basketbtn">
                    ADD TO BASKET
                  </button>
                </div>
              </div>
            </div>
           
          </div>
          <div className="allproductsbtn my-5">
            <button type="button" className="btn seebtn fs-4 fw-bolder">
              SEE ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
      {/* {products.map((product) => (
              <Seasonal  key={product.id} product={product} />
            ))}
       */}
        <Deadline />
         <Seasonal products={products} />
    </>
  );
}

export default Item;
