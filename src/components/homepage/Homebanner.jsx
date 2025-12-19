import styles from "./Home.module.css";

export const Homebanner = () => {
  return (
    <>
      <div className={styles["main-banner-area"]}>
        <div className={styles["banner-layer"]}>
          <div className="container">
            <div className={styles["banner-padding-div"]}>
              <div className={styles["banner-parts"]}>
                <div className={styles["banner-text"]}>
                  <h1>20 Lacs+ Customers Trust In Astroera</h1>
                  <h2>
                    Talk to India's Best Expert Astrologers <br />
                    First Chat Free
                  </h2>
                  <a
                    href="https://astroera.in/chat-with-astrologer"
                    className={styles["chat-now"]}
                  >
                    Chat Now
                  </a>
                  <div className={styles["availabe-on"]}>
                    <p>App Available on:</p>
                    <a href="https://play.google.com/store/apps/details?id=com.astroera.astroera_user">
                      <i className="fa-brands fa-android"></i>
                    </a>
                  </div>
                </div>
                <div className={styles["banner-side-img"]}>
                  <img
                    src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/Banner-Image-Pandit.png"
                    alt="Pandit-img"
                    width="500"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["four-box"]}>
            <div className="container">
              <div className={styles["box-div"]}>
                <div className={styles["box-div-inner"]}>
                  <a href="https://astroera.in/chat-with-astrologer">
                    <img
                      src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/Chat.png"
                      alt="Alt - Chat with astrologer"
                      width="80"
                      height="80"
                    />
                    <span>Chat with Astrologer</span>
                  </a>
                </div>
                <div className={styles["box-div-inner"]}>
                  <a href="https://astroera.in/talk-to-astrologer">
                    <img
                      src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/Call.png"
                      alt="Alt - Talk to astrologer"
                      width="80"
                      height="80"
                    />
                    <span>Talk to Astrologer</span>
                  </a>
                </div>
                <div className={styles["box-div-inner"]}>
                  <a href="https://astroera.in/marriage-prediction">
                    <img
                      src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/MArriage.png"
                      alt="Alt - Marriage Prediction"
                      width="80"
                      height="80"
                    />
                    <span>Marriage Prediction</span>
                  </a>
                </div>
                <div className={styles["box-div-inner"]}>
                  <a href="https://astroera.in/book-your-puja">
                    <img
                      src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/Puja.png"
                      alt="Alt - Book a Pooja"
                      width="80"
                      height="80"
                    />
                    <span>Book a Pooja</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
