import { useState } from "react";
import styles from "./Mobilenav.module.css";

export const Mobilenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mod-header">
        <header className={styles["header"]}>
          <div className={styles["logo"]}>
            <a href="https://astroera.in/">
              <img
                src="https://d2vlk40wphb5v6.cloudfront.net/public/frontend/img/astro-era-logo.webp"
                alt="Astroera Logo"
                width="150"
                height="41"
              />
            </a>
          </div>

          <div className={styles["header-buttons"]}>
            <button
              className={styles["signin-modal-btn"]}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Log In
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.astroera.astroera_user"
              className={styles["get-app"]}
            >
              Get App
            </a>
            <button
              className={styles["btn-menu"]}
              onClick={() => setIsOpen(true)}
            >
              ☰
            </button>
          </div>
        </header>

        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
          <button
            className={styles["close-btn"]}
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <ul
            className={`navbar-nav me-auto mb-2 mb-lg-0 ms-auto ${styles["rrmenu-mob"]}`}
            id="sidebarMenu"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://astroera.in"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://astroera.in/free-kundli">
                Free Kundli
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className={styles["drop-url"]}
                data-bs-toggle="collapse"
                href="#kundliMenu"
                role="button"
                aria-expanded="false"
                aria-controls="kundliMenu"
              >
                Kundli Prediction <i className="fa-solid fa-chevron-down"></i>
              </a>

              <div
                className={`collapse ${styles["drop-down-div"]}`}
                id="kundliMenu"
                data-bs-parent="#sidebarMenu"
              >
                <a
                  className="dropdown-item"
                  href="https://astroera.in/life-prediction"
                >
                  Life Prediction
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/education-prediction"
                >
                  Education Prediction
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/health-prediction"
                >
                  Health Prediction
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/finance-prediction"
                >
                  Finance Prediction
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/career-prediction"
                >
                  Career Prediction
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/varshphal-report"
                >
                  Varshphal Report
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/lal-kitab"
                >
                  Lal Kitab
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/marriage-prediction"
                >
                  Marriage Prediction
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/navagrah-report"
                >
                  Navagrah Report
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/gemstone-report"
                >
                  Gemstone Report
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/numerology-report"
                >
                  Numerology Report
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/kundali-matching"
                >
                  Kundli Matching
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className={styles["drop-url"]}
                data-bs-toggle="collapse"
                href="#astrologers"
                role="button"
                aria-expanded="false"
                aria-controls="astrologers"
              >
                Astrologer <i className="fa-solid fa-chevron-down"></i>
              </a>

              <div
                className={`collapse ${styles["drop-down-div"]}`}
                id="astrologers"
                data-bs-parent="#sidebarMenu"
              >
                <a
                  className="dropdown-item"
                  href="https://astroera.in/chat-with-astrologer"
                >
                  Chat with Astrologer
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/talk-to-astrologer"
                >
                  Talk to Astrologer
                </a>
                <a className="dropdown-item" href="https://astroera.in/live">
                  Live Session
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className={styles["drop-url"]}
                data-bs-toggle="collapse"
                href="#horoscope"
                role="button"
                aria-expanded="false"
                aria-controls="horoscope"
              >
                Horoscope <i className="fa-solid fa-chevron-down"></i>
              </a>
              <div
                className={`collapse ${styles["drop-down-div"]}`}
                id="horoscope"
                data-bs-parent="#sidebarMenu"
              >
                <a
                  className="dropdown-item"
                  href="https://astroera.in/yearly-horoscope"
                >
                  Horoscope 2025
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/today-horoscope"
                >
                  Today's Horoscope
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/tomorrow-horoscope"
                >
                  Tomorrow Horoscope
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/weekly-horoscope"
                >
                  Weekly Horoscope
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/monthly-horoscope"
                >
                  Monthly Horoscope
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className={styles["drop-url"]}
                data-bs-toggle="collapse"
                href="#puja"
                role="button"
                aria-expanded="false"
                aria-controls="puja"
              >
                Online Puja <i className="fa-solid fa-chevron-down"></i>
              </a>
              <div
                className={`collapse ${styles["drop-down-div"]}`}
                id="puja"
                data-bs-parent="#sidebarMenu"
              >
                <a
                  className="dropdown-item"
                  href="https://astroera.in/book-your-puja"
                >
                  All Puja
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/pooja-for-love-and-marriage"
                >
                  Puja for Marriage
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/pujas-for-love-and-romance"
                >
                  Love and Romance
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/pooja-for-money-and-business"
                >
                  Money and Business
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/pooja-for-child-related-problem"
                >
                  Child Related Problem
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/enemy-and-evil-effect"
                >
                  Enemy and Evil Effect
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/pooja-for-grah-planet"
                >
                  Puja for Grah Shanti
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/pooja-for-health-and-upliftment"
                >
                  Health and Upliftment
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/pooja-for-career-and-education"
                >
                  Career and Education
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/yagyas-homam"
                >
                  Yagyas (Homam)
                </a>
                <a
                  className="dropdown-item"
                  href="https://astroera.in/shop/anushthan"
                >
                  Anusthan
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://astroera.in/blogs">
                Blogs
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="https://astroera.in/watch"
              >
                Watch Puja
              </a>
            </li>

            <li>
              <a href="https://astroera.in/signup" className="nav-link">
                Join as Astrologer
              </a>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${styles["sidebar-btn"]}`}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Login
              </button>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className={styles["overlay"]} onClick={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
};
