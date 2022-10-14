import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="sh-name">Search Here..</div>
      <form>
        <input type="text" placeholder="Product name..." />
        <button>
          <i className="fa fa-caret-right"></i>
        </button>
      </form>
      <hr />
      <div className="sh-name mar-bot">Price</div>
      <ul>
        <li>Under $1,000</li>
        <li>$1,000 - $5,000</li>
        <li>$5,000 - $10,000</li>
        <li>$10,000 - $20,000</li>
        <li>$20,000 $30,000</li>
        <li>Over $30,000</li>
      </ul>
      <hr />
      <div className="sh-name mar-bot">Discount</div>
      <ul className="checklist">
        <li>
          <input type="checkbox" />
          5% or More
        </li>
        <li>
          <input type="checkbox" />
          10% or More
        </li>
        <li>
          <input type="checkbox" />
          20% or More
        </li>
        <li>
          <input type="checkbox" />
          30% or More
        </li>
        <li>
          <input type="checkbox" />
          50% or More
        </li>
        <li>
          <input type="checkbox" />
          60% or More
        </li>
      </ul>
      <hr />
      <div className="sh-name mar-bot">Customer Review</div>
      <ul>
        <li>5.0</li>
        <li>4.0</li>
        <li>3.5</li>
        <li>3.0</li>
        <li>2.5</li>
      </ul>
      <hr />
      <div className="sh-name mar-bot">Electronics</div>
      <ul className="checklist">
        <li>
          <input type="checkbox" />
          Accessories
        </li>
        <li>
          <input type="checkbox" />
          Cameras & Photography
        </li>
        <li>
          <input type="checkbox" />
          Car & Vehicle Electronics
        </li>
        <li>
          <input type="checkbox" />
          Computers & Accessories
        </li>
        <li>
          <input type="checkbox" />
          GPS & Accessories
        </li>
        <li>
          <input type="checkbox" />
          Headphones
        </li>
      </ul>
      <hr />
      <div className="sh-name mar-bot">Cash On Delivery</div>
      <ul className="checklist">
        <li>
          <input type="checkbox" />
          Eligible for Cash On Delivery
        </li>
      </ul>
      <hr />
      <div className="sh-name mar-bot">New Arrivals</div>
      <ul className="checklist">
        <li>
          <input type="checkbox" />
          Last 30 days
        </li>
        <li>
          <input type="checkbox" />
          Last 90 days
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
