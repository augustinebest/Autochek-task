import "./navbar.css";
import logo from "../../assets/store.png";
import NavLinks from "./navlinks";
import { Link } from "react-router-dom";

const options: string[] = [
  "All Categories",
  "Televisions",
  "Headphones",
  "Computers",
  "Appliances",
  "Mobiles",
  "Tv & Video",
  "iPad & Tablets",
  "Cameras & Camcorders",
  "Home Audio & Theater",
];

const Navbar = () => {
  return (
    <div>
      <section className="nav-container-fluid">
        <div className="nav-header-right">
          <p>
            Offer Zone Top Deals & Discounts
            <i className="fa fa-shopping-cart"></i>
          </p>
        </div>
        <div className="nav-header-left">
          <div className="nav-div">
            <ul>
              <li>
                <a href="#text">
                  <i className="fa fa-map-marker-alt"></i>Select Location
                </a>
              </li>
              <li>
                <a href="#text">
                  <i className="fas fa-truck"></i>Track Order
                </a>
              </li>
              <li>
                <a href="#text">
                  <i className="fa fa-phone"></i>001 234 5678
                </a>
              </li>
              <li>
                <a href="#text">
                  <i className="fas fa-sign-in-alt"></i>Log In
                </a>
              </li>
              <li>
                <a href="#text">
                  <i className="fas fa-sign-out-alt"></i>Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="search-sect">
        <div className="logo display-center">
          <img src={logo} alt="logo" />
          <span>Electro Store</span>
        </div>
        <div className="input">
          <form className="form">
            <input type="text" placeholder="Search" />
            <button type="button">Search</button>
          </form>
        </div>
        <button className="cart">
          <i className="fa fa-shopping-cart"></i>
        </button>
      </section>
      <section className="navlinks">
        <div className="dropdown display-center">
          <select>
            {options.map((val, index) => (
              <option key={index}>{val}</option>
            ))}
          </select>
        </div>
        <div>
          <ul className="list">
            <li>
              <Link to="/" className="p-link">
                <a href="#home">Home</a>
              </Link>
            </li>
            <li id="electronics">
              <a href="#electronics">Electronics</a>
              <i className="fa fa-caret-down"></i>
              <NavLinks header="Mobiles, Computer" type="electronics" />
            </li>
            <li>
              <a href="#appliances">Appliances</a>
              <i className="fa fa-caret-down"></i>
              <NavLinks
                header="TV, Appliances, Electronics"
                type="appliances"
              />
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#new">New Arrivals</a>
            </li>
            <li>
              <a href="#pages">Pages</a>
              <i className="fa fa-caret-down"></i>
              <NavLinks type="pages" />
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
