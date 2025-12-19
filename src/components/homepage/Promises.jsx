import styles from "./Promises.module.css";
import homeData from "../../api/home.json";

export const Promises = () => {
  return (
    <>
      <div className={styles["our-promises-home"]}>
        <div className="container">
          <h3>Our Promise</h3>
          <div className={styles["our-prom-h"]}>
            {homeData.promiseData.map((currElem) => {
              return (
                <div className={styles["prom-card-h"]} key={currElem.id}>
                  <img src={currElem.image_url} alt={currElem.image_alt} />
                  <span>{currElem.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
