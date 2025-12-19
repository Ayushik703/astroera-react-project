import Slider from "react-slick";
import "../../App.css";
import styles from "./Blogs.module.css";

export const Blogs = () => {
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
      <div className={styles["home-blogs-div"]}>
        <div className="container">
          <h3>Our Latest Blogs</h3>
          <div className={styles["blogs-slider"]}>
            <Slider {...settings}>
              <div className={styles["blogs-out"]}>
                <div className={styles["blogs-card"]}>
                  <a href="#">
                    <div className={styles["blog-img"]}>
                      <img
                        src="https://d2vlk40wphb5v6.cloudfront.net/public/cms-images/blogs/1515815555_What-Does-Rahu-in-12th-House-Mean-Small.webp"
                        alt="Blog img"
                        width="361"
                        height="211"
                      />
                    </div>
                    <div className={styles["blog-content"]}>
                      <h5>
                        Dussehra 2025 in India: Celebration of Good Over Evil
                      </h5>
                      <p>
                        India is a land where every festival carries a heartbeat
                        of history, a whisper of wisdom, and a promise of joy.
                        Among all these vibrant celebrations, Dussehra—also
                        known as Vijayadashami—stands tall as a festival of
                        truth, courage, and renewal.
                      </p>
                    </div>
                    <div className={styles["blog-author"]}>
                      <span>04 Sept 2025</span>
                      <button>Read more</button>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles["blogs-out"]}>
                <div className={styles["blogs-card"]}>
                  <a href="#">
                    <div className={styles["blog-img"]}>
                      <img
                        src="https://d2vlk40wphb5v6.cloudfront.net/public/cms-images/blogs/1515815555_What-Does-Rahu-in-12th-House-Mean-Small.webp"
                        alt="Blog img"
                        width="361"
                        height="211"
                      />
                    </div>
                    <div className={styles["blog-content"]}>
                      <h5>
                        Dussehra 2025 in India: Celebration of Good Over Evil
                      </h5>
                      <p>
                        India is a land where every festival carries a heartbeat
                        of history, a whisper of wisdom, and a promise of joy.
                        Among all these vibrant celebrations, Dussehra—also
                        known as Vijayadashami—stands tall as a festival of
                        truth, courage, and renewal.
                      </p>
                    </div>
                    <div className={styles["blog-author"]}>
                      <span>04 Sept 2025</span>
                      <button>Read more</button>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles["blogs-out"]}>
                <div className={styles["blogs-card"]}>
                  <a href="#">
                    <div className={styles["blog-img"]}>
                      <img
                        src="https://d2vlk40wphb5v6.cloudfront.net/public/cms-images/blogs/1515815555_What-Does-Rahu-in-12th-House-Mean-Small.webp"
                        alt="Blog img"
                        width="361"
                        height="211"
                      />
                    </div>
                    <div className={styles["blog-content"]}>
                      <h5>
                        Dussehra 2025 in India: Celebration of Good Over Evil
                      </h5>
                      <p>
                        India is a land where every festival carries a heartbeat
                        of history, a whisper of wisdom, and a promise of joy.
                        Among all these vibrant celebrations, Dussehra—also
                        known as Vijayadashami—stands tall as a festival of
                        truth, courage, and renewal.
                      </p>
                    </div>
                    <div className={styles["blog-author"]}>
                      <span>04 Sept 2025</span>
                      <button>Read more</button>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles["blogs-out"]}>
                <div className={styles["blogs-card"]}>
                  <a href="#">
                    <div className={styles["blog-img"]}>
                      <img
                        src="https://d2vlk40wphb5v6.cloudfront.net/public/cms-images/blogs/1515815555_What-Does-Rahu-in-12th-House-Mean-Small.webp"
                        alt="Blog img"
                        width="361"
                        height="211"
                      />
                    </div>
                    <div className={styles["blog-content"]}>
                      <h5>
                        Dussehra 2025 in India: Celebration of Good Over Evil
                      </h5>
                      <p>
                        India is a land where every festival carries a heartbeat
                        of history, a whisper of wisdom, and a promise of joy.
                        Among all these vibrant celebrations, Dussehra—also
                        known as Vijayadashami—stands tall as a festival of
                        truth, courage, and renewal.
                      </p>
                    </div>
                    <div className={styles["blog-author"]}>
                      <span>04 Sept 2025</span>
                      <button>Read more</button>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles["blogs-out"]}>
                <div className={styles["blogs-card"]}>
                  <a href="#">
                    <div className={styles["blog-img"]}>
                      <img
                        src="https://d2vlk40wphb5v6.cloudfront.net/public/cms-images/blogs/1515815555_What-Does-Rahu-in-12th-House-Mean-Small.webp"
                        alt="Blog img"
                        width="361"
                        height="211"
                      />
                    </div>
                    <div className={styles["blog-content"]}>
                      <h5>
                        Dussehra 2025 in India: Celebration of Good Over Evil
                      </h5>
                      <p>
                        India is a land where every festival carries a heartbeat
                        of history, a whisper of wisdom, and a promise of joy.
                        Among all these vibrant celebrations, Dussehra—also
                        known as Vijayadashami—stands tall as a festival of
                        truth, courage, and renewal.
                      </p>
                    </div>
                    <div className={styles["blog-author"]}>
                      <span>04 Sept 2025</span>
                      <button>Read more</button>
                    </div>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
