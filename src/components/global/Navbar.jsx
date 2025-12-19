import styles from "./Navbar.module.css";
import "../../App.css";
import { Loginmodal } from "./Loginmodal";
import { Mobilenav } from "./Mobilenav";

export const Navbar = () => {
  return (
    <>
      <header className="web-header">
        <div className={styles["big-header"]}>
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className={styles["web-header-logo"]}>
                  <a href="https://astroera.in/">
                    <img
                      src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/astro-era-logo.webp"
                      alt="Astroera Logo"
                      width="150"
                      height="41"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className={styles["header-right"]}>
                  <div className={styles["three-header-btns"]}>
                    <a href="https://astroera.in/chat-with-astrologer">
                      <img
                        src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/talk.png"
                        alt="chat"
                        width="25"
                        height="25"
                      />
                      <span>Chat with Astrologer</span>
                    </a>
                    <a href="https://astroera.in/talk-to-astrologer">
                      <img
                        src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/call-icons.png"
                        alt="talk"
                        width="25"
                        height="25"
                      />
                      <span>Talk to Astrologer</span>
                    </a>
                    <a href="https://astroera.in/book-your-puja">
                      <img
                        src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/astrologer-login.png"
                        alt="puja"
                        width="25"
                        height="25"
                      />
                      <span>Book a Puja</span>
                    </a>
                  </div>
                  <div className={styles["login-btns"]}>
                    <button
                      className={styles["signin-modal-btn"]}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Sign In
                    </button>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.astroera.astroera_user"
                      className={styles["get-app"]}
                    >
                      Get App
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["lower-navbar"]}>
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className={`navbar-nav ${styles["head-navbar"]}`}>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="https://astroera.in/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://astroera.in/free-kundli"
                      >
                        Free Kundli
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="kundliPredictionLink"
                        role="button"
                        aria-expanded="false"
                      >
                        Kundli Prediction
                      </a>
                      <ul
                        className={`dropdown-menu ${styles["hover-menu"]}`}
                        aria-labelledby="kundliPredictionLink"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/life-prediction"
                          >
                            Life Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/kundali-matching"
                          >
                            Kundli Matching
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/marriage-prediction"
                          >
                            Marriage Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/health-prediction"
                          >
                            Health Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/finance-prediction"
                          >
                            Finance Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/career-prediction"
                          >
                            Career Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/education-prediction"
                          >
                            Education Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/varshphal-report"
                          >
                            Varshphal Report
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/lal-kitab"
                          >
                            Lal Kitab
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/navagrah-report"
                          >
                            Navgrah Report
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/gemstone-report"
                          >
                            Gemstone Report
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/numerology-report"
                          >
                            Numerology Report
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="calculatorLink"
                        role="button"
                        aria-expanded="false"
                      >
                        Calculator
                      </a>
                      <ul
                        className={`dropdown-menu ${styles["hover-menu"]}`}
                        aria-labelledby="calculatorLink"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/life-prediction"
                          >
                            Life Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/kundali-matching"
                          >
                            Kundli Matching
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/marriage-prediction"
                          >
                            Marriage Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/life-prediction"
                          >
                            Life Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/kundali-matching"
                          >
                            Kundli Matching
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/marriage-prediction"
                          >
                            Marriage Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/health-prediction"
                          >
                            Health Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/finance-prediction"
                          >
                            Finance Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/career-prediction"
                          >
                            Career Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/education-prediction"
                          >
                            Education Prediction
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/varshphal-report"
                          >
                            Varshphal Report
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/lal-kitab"
                          >
                            Lal Kitab
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/navagrah-report"
                          >
                            Navgrah Report
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/gemstone-report"
                          >
                            Gemstone Report
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/numerology-report"
                          >
                            Numerology Report
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="horoscopeLink"
                        role="button"
                        aria-expanded="false"
                      >
                        Horoscope
                      </a>
                      <ul
                        className={`dropdown-menu ${styles["hover-menu"]}`}
                        aria-labelledby="horoscopeLink"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/yearly-horoscope"
                          >
                            Horoscope 2025
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/today-horoscope"
                          >
                            Today's Horoscope
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/tomorrow-horoscope"
                          >
                            Tomorrow Horoscope
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/weekly-horoscope"
                          >
                            Weekly Horoscope
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/monthly-horoscope"
                          >
                            Monthly Horoscope
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="pujaLink"
                        role="button"
                        aria-expanded="false"
                      >
                        Online Puja
                      </a>
                      <ul
                        className={`dropdown-menu ${styles["hover-menu"]}`}
                        aria-labelledby="pujaLink"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/book-your-puja"
                          >
                            All Pujas
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/pooja-for-love-and-marriage"
                          >
                            Puja for Marriage
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/pujas-for-love-and-romance"
                          >
                            Love and Romance
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/pooja-for-money-and-business"
                          >
                            Money and Business
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/pooja-for-child-related-problem"
                          >
                            Child Related Problem
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/enemy-and-evil-effect"
                          >
                            Enemy and Evil Effect
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/pooja-for-grah-planet"
                          >
                            Puja for Graha Shanti
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/pooja-for-health-and-upliftment"
                          >
                            Health and Upliftment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/pooja-for-career-and-education"
                          >
                            Career and Education
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/yagyas-homam"
                          >
                            Yagyas (Homam)
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://astroera.in/shop/anushthan"
                          >
                            Anushthan
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://astroera.in/blogs">
                        Blogs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://astroera.in/watch">
                        Watch Puja
                      </a>
                    </li>
                    <li className="nav-item">
                      <select
                        name="lang"
                        id="swaplang"
                        className={styles["lang-select"]}
                      >
                        <option value="en">Eng</option>
                        <option value="hi">हिन्दी</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Mobilenav />

      <Loginmodal />
    </>
  );
};
