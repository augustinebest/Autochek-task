interface INavLinks {
  type: string;
  header?: string;
}

const electronics: string[] = [
  "All Mobile Phones",
  "All Mobile Accessories",
  "Cases & Covers",
  "Screen Protectors",
  "Power Banks",
  "All Certified Refurbished",
  "Tablets",
  "Wearable Devices",
  "Smart Home",
  "Laptops",
  "Drives & Storage",
  "Printers & Ink",
  "Networking Devices",
  "Computer Accessories",
  "Game Zone",
  "Software",
];

const appliances: string[] = [
  "Televisions",
  "Home Entertainment Systems",
  "Headphones",
  "Speakers",
  "MP3, Media Players & Accessories",
  "Audio & Video Accessories",
  "Cameras",
  "DSLR Cameras",
  "Camera Accessories",
  "Musical Instruments",
  "Gaming Consoles",
  "All Electronics",
  "Air Conditioners",
  "Refrigerators",
  "Washing Machines",
  "Kitchen & Home Appliances",
  "Heating & Cooling Appliances",
  "All Appliances",
];

const pages: string[] = [
  "Product 1",
  "Product 2",
  "Single Product 1",
  "Single Product 2",
  "Checkout Page",
  "Payment Page",
];

const NavLinks = ({ type, header }: INavLinks) => {
  const dataToDisplay =
    type === "electronics"
      ? electronics
      : type === "appliances"
      ? appliances
      : [];
  return (
    <div className={type === "pages" ? "pages-link" : "navlink-list"}>
      <h5>{header}</h5>
      <ul>
        {dataToDisplay.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
        {type === "pages" &&
          pages.map((val, index) => <li key={index}>{val}</li>)}
      </ul>
    </div>
  );
};

export default NavLinks;
