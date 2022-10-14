import slider1 from "../../assets/carousel/slider1.jpg";
import slider2 from "../../assets/carousel/slider2.jpg";
import slider3 from "../../assets/carousel/slider3.jpg";
import slider4 from "../../assets/carousel/slider4.jpg";

const Slider = () => {
  return (
    <section className="sh">
      <div id="slideshow">
        <div className="slide-wrapper">
          <div className="slide">
            <img src={slider1} alt="slideshow" />
          </div>
        </div>
      </div>
      <div className="sh-multiple">
        <div>
          <img src={slider2} alt="img" />
        </div>
        <div>
          <img src={slider3} alt="img" />
        </div>
        <div>
          <img src={slider4} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
