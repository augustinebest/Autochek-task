import Navbar from "../components/Navbar/navbar";
import "./productDetail.css";
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
  const [carMedia, setCarMedia] = useState<any>();
  useEffect(() => {
    window.scrollTo(0, 0);
    const getApi = async () => {
      const result = await Promise.all([
        Req.get(`/car/${location.state.id}`),
        Req.get(`/car_media?carId=${location.state.id}`),
      ]);
      setDetails(result[0]);
      setCarMedia(result[1]);
    };
    getApi();
  }, [location]);

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
            <Slider carMedia={carMedia} />
          </div>
          <div className="pr-descriptions">
            <div>
              <h3 className="pr-name">{details?.carName}</h3>
              <div className="pr-price">
                <span>{`₦${formatter
                  .format(details?.marketplacePrice)
                  .substring(1)}`}</span>
                <del>{`₦${formatter
                  .format(details?.marketplaceOldPrice)
                  .substring(1)}`}</del>
                <span className="free">Free delivery</span>
              </div>
              <ul>
                <li>
                  <i className="fa fa-map-marker-alt"></i>
                  <span>
                    {details?.city}, {details?.state}, {details?.country}
                  </span>
                </li>
                <li>Shipping Speed to Delivery.</li>
                {details?.inspectorDetails && (
                  <li>
                    <i className="fa fa-phone"></i>
                    Contact{" "}
                    <span>
                      {details?.inspectorDetails.inspectorFullName}
                    </span>{" "}
                    at <span>{details?.inspectorDetails.workshopName}</span> for
                    inspection
                  </li>
                )}
              </ul>
            </div>
            <div className="warranty">
              <div className="pr-desc">
                <i className="fa fa-hand-o-right hand"></i>{" "}
                <span>Vehicle Description</span>
              </div>
              <div className="vehicle-description">
                <div className="vehicle-desc">
                  <div>
                    <span>Engine Type</span>
                    <span>{details?.engineType}</span>
                  </div>
                  <div>
                    <span>Transmission</span>
                    <span>{details?.transmission}</span>
                  </div>
                  <div>
                    <span>Fuel Type</span>
                    <span>{details?.fuelType}</span>
                  </div>
                  <div>
                    <span>Interior color</span>
                    <span>{details?.interiorColor}</span>
                  </div>
                  <div>
                    <span>Exterior color</span>
                    <span>{details?.exteriorColor}</span>
                  </div>
                  <div>
                    <span>VIN</span>
                    <span>{details?.vin}</span>
                  </div>
                  <div>
                    <span>Selling condition</span>
                    <span>{details?.sellingCondition}</span>
                  </div>
                  <div>
                    <span>Vehicle ID</span>
                    <span>{details?.id}</span>
                  </div>
                </div>
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
