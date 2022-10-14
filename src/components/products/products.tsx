import "./products.css";
import Sidebar from "../sidebar/sidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Req from "../../api/requestProcessor";
import { ICarData } from "../../intereface/car.interface";
import { formatter } from "../../utility/formatCurrency";

const Product = () => {
  const [data, setData] = useState<ICarData>();
  useEffect(() => {
    const getApi = async () => {
      const result = await Req.get("/car/search");
      setData(result);
    };
    getApi();
  }, []);
  return (
    <section className="product">
      <div className="span-sect">
        <span>O</span>ur <span>N</span>ew <span>P</span>roducts
      </div>
      <div>
        <div>
          <div className="brand">
            <h3>New Brand Mobiles</h3>
            <div className="items">
              {data?.result && data?.result.length > 0 ? (
                data?.result.map((val, index) => (
                  <div key={index}>
                    <div className="brand-img">
                      {/* {val.new && <div className="new-item">New</div>} */}
                      <img src={val.imageUrl} alt="brand" />
                      <Link to={`/details/${val.id}`} state={{ id: val.id }}>
                        <button className="quick-view">Quick view</button>
                      </Link>
                    </div>
                    <hr />
                    <div className="br-name">{val.title}</div>
                    <div className="br-prices">
                      <span className="br-price1">
                        {`₦${formatter
                          .format(val.marketplacePrice)
                          .substring(1)}`}
                      </span>
                      <del className="br-price2">
                        {`₦${formatter
                          .format(val.marketplaceOldPrice)
                          .substring(1)}`}
                      </del>
                    </div>
                    <div className="br-button">
                      <button className="addToCart">ADD TO CART</button>
                    </div>
                  </div>
                ))
              ) : (
                <div>loading...</div>
              )}
            </div>
          </div>
          {/* <div className="brand">
            <h3>New Brand Mobiles</h3>
            <div className="items">
              {items.length > 0 ? (
                items.map((val, index) => (
                  <div key={index}>
                    <div className="brand-img">
                      {val.new && <div className="new-item">New</div>}
                      <img src={slider4} alt="brand" />
                      <button className="quick-view">Quick view</button>
                    </div>
                    <hr />
                    <div className="br-name">{val.name}</div>
                    <div className="br-prices">
                      <span className="br-price1">{val.price1}</span>
                      <del className="br-price2">{val.price2}</del>
                    </div>
                    <div className="br-button">
                      <button className="addToCart">ADD TO CART</button>
                    </div>
                  </div>
                ))
              ) : (
                <div>loading...</div>
              )}
            </div>
          </div> */}
        </div>
        <div className="sidebar-sect">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Product;
