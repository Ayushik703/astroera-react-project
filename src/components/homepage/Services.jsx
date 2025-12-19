import styles from "./Services.module.css";
import homeData from "../../api/home.json";

export const Services = () => {
  return (
    <>
      <div className={styles["astrology-services"]}>
        <div className="container">
          <h1>Free Astrology Services</h1>
          <div className={styles["main-astrology-card"]}>
            {homeData.serviceData.map((currElem) => {
              return (
                <div
                  className={styles["astrology-service-cards"]}
                  key={currElem.id}
                >
                  <a href={currElem.url}>
                    <img
                      src={currElem.image_url}
                      alt={currElem.image_alt}
                      width="100"
                      height="100"
                    />
                    <p>{currElem.name}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
