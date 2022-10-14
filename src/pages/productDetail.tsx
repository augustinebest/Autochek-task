import Navbar from "../components/Navbar/navbar";
import "./productDetail.css";
import slider4 from "../assets/carousel/slider4.jpg";
import Slider from "../components/carousel/slideshow";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Req from "../api/requestProcessor";
import { useLocation } from "react-router-dom";
import { formatter } from "../utility/formatCurrency";

const ProductDetail = () => {
  const location = useLocation();
  const [details, setDetails] = useState<any>();
  useEffect(() => {
    window.scrollTo(0, 0);
    const getApi = async () => {
      const result = await Req.get(`/car/${location.state.id}`);
      setDetails(result);
      const getImages = await Req.get(`/car_media?carId=${location.state.id}`);
      console.log("getImages", getImages);
    };
    getApi();
  }, [location]);
  console.log("resultttt", details);

  return (
    <div>
      <Navbar />
      <div className="pr-background">
        <img src={details?.imageUrl} alt="product" />
      </div>
      <div className="pr-container">
        <ul>
          <li>
            <Link className="p-link" to="/">
              HOME
            </Link>
            <span>/</span>
          </li>
          <li>SINGLE PRODUCT 1</li>
        </ul>
      </div>
      <section className="product">
        <div className="span-sect">
          <span>S</span>ingle <span>P</span>age
        </div>
      </section>
      <section className="pr-details">
        <div>
          <div>
            <Slider />
          </div>
          <div className="pr-descriptions">
            <div>
              <h3 className="pr-name">{details?.carName}</h3>
              <div className="pr-price">
                <span>{`₦${formatter
                  .format(details?.marketplaceOldPrice)
                  .substring(1)}`}</span>
                <del>{`₦${formatter
                  .format(details?.marketplaceOldPrice)
                  .substring(1)}`}</del>
                <span className="free">Free delivery</span>
              </div>
              <ul>
                <li>Cash on Delivery Eligible.</li>
                <li>Shipping Speed to Delivery.</li>
                <li>EMIs from $655/month.</li>
                <li>
                  Bank OfferExtra 5% off* with Axis Bank Buzz Credit CardT&C
                </li>
              </ul>
            </div>
            <div className="warranty">
              <div className="pr-desc">
                <i className="fa fa-hand-o-right hand"></i>{" "}
                <span>1 YearManufacturer Warranty</span>
              </div>
              <ul>
                <li>3 GB RAM | 16 GB ROM | Expandable Upto 256 GB</li>
                <li>5.5 inch Full HD Display</li>
                <li>13MP Rear Camera | 8MP Front Camera</li>
                <li>3300 mAh Battery</li>
                <li>Exynos 7870 Octa Core 1.6GHz Processor</li>
              </ul>
              <div className="pr-desc">
                <i className="fa fa-retweet hand"></i>{" "}
                <span>Net banking & Credit/ Debit/ ATM card</span>
              </div>
              <div className="br-button">
                <button className="addToCart">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;
