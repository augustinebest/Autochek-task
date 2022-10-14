import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer/footer";
import Navbar from "../components/Navbar/navbar";
import Product from "../components/products/products";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Slide Show */}
      <section>
        <Carousel />
      </section>
      {/* Product */}
      <div>
        <Product />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
