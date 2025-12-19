import Slider from "react-slick";
import homeData from "../../api/home.json";
import styles from "./Pujas.module.css";
import "../../App.css";

export const Pujas = () => {
  const settings = {
    dots: false,
    infinite: false, // desktop: no loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // show arrows only on desktop
    autoplay: false, // desktop: no autoplay
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          arrows: false, // hide arrows on tablet
          infinite: true, // loop on tablet
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false, // hide arrows on smaller tablets
          infinite: true, // loop
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false, // hide arrows on mobile
          infinite: true, // loop
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles["puja-special-div"]}>
        <div className="container">
          <h2>Book Online Personalized Puja</h2>
          <div className={styles["puja-slider"]}>
            <Slider {...settings}>
              {homeData.pujaData.map((currElem) => {
                return (
                  <div className={styles["slider-items"]} key={currElem.id}>
                    <a href={currElem.url}>
                      <img src={currElem.image_url} alt={currElem.image_alt} />
                      <div className={styles["slider-info"]}>
                        <p>{currElem.name}</p>
                        <span>{currElem.one_liner}</span>
                        <button className={styles["book-now"]}>Book Now</button>
                      </div>
                    </a>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
