import Slider from "react-slick";
import "../../App.css";
import homeData from "../../api/home.json";
import styles from "./Reviews.module.css";

export const Review = () => {
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
      <div className={styles["user-reviews-div"]}>
        <div className="container">
          <h3>Our Customer Reviews</h3>
          <div className="reviews-slider">
            <Slider {...settings}>
              {homeData.reviewsData.map((currElem) => {
                return (
                  <div className={styles["review-outer-div"]} key={currElem.id}>
                    <div className={styles["user-review"]}>
                      <div className={styles["user-name-img"]}>
                        <img
                          src={currElem.image_url}
                          alt={currElem.image_alt}
                          width="70"
                          height="70"
                        />
                        <div className={styles["name-count"]}>
                          <p>{currElem.name}</p>
                          <span>{currElem.country}</span>
                        </div>
                      </div>
                      <div className={styles["user-comment"]}>
                        <p>{currElem.review}</p>
                      </div>
                    </div>
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
