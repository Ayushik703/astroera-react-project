import styles from "./Availability.module.css";
import homeData from "../../api/home.json";

export const Availability = () => {
  return (
    <>
      <div className={styles["availability-section"]}>
        <div className="container">
          <h2>Most Trusted Astrology Platform</h2>
          <div className="row">
            {homeData.availData.map((currElem) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12" key={currElem.id}>
                  <div className={styles["avail-inner-div"]}>
                    <img
                      src={currElem.image_url}
                      alt={currElem.image_alt}
                      width="65"
                      height="65"
                    />
                    <p>{currElem.name}</p>
                    <span>{currElem.one_liner}</span>
                    <div className="bg-hover"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
