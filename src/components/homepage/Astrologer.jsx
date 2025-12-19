import { useState, useEffect } from "react";
import styles from "./Astrologer.module.css";
import { ChatRequestForm } from "./ChatRequestForm";

export const Astrologer = () => {
  const [astrologers, setAstrologers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAstrologers() {
      try {
        setLoading(true);
        const res = await fetch("https://astroera.in/api/liveAstro");
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setAstrologers(data.live_astrologer || []); // pick live_astrologer
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAstrologers();
  }, []);

  if (loading) return <p>Loading astrologers...</p>;
  if (error) return <p>Failed to load astrologers: {error}</p>;

  return (
    <>
      <div className={styles["astrologers-profile-cards"]}>
        <div className="container">
          <h2>Online Astrology Prediction by Experts</h2>
          <div className={styles["profile-cards"]}>
            {astrologers.length === 0 ? (
              <p>No astrologers online right now.</p>
            ) : (
              astrologers.map((astro) => (
                <div className={styles["width-card"]} key={astro.id}>
                  <div className={styles["astrologers"]}>
                    {/* <span>Must Try</span> */}
                    <img
                      src={`https://astroera.in${astro.image_path}${astro.image}`}
                      alt={astro.name}
                      width="60"
                      height="60"
                    />

                    {/* <div className={styles["rating-stars"]}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`fa fa-star ${
                        i < astro.rating
                          ? styles["filled-star"]
                          : styles["empty-star"]
                      }`}
                      aria-hidden="true"
                    ></i>
                  ))}
                </div> */}

                    <a
                      href={`https://astroera.in/astrologer/${astro.slug}/${astro.id}`}
                    >
                      {astro.name}
                    </a>
                    <p className={styles["skills"]}>{astro.specialisation}</p>

                    <div className={styles["chat-call-btns"]}>
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#chatModal"
                      >
                        Chat
                      </a>
                      {/* <a href={`https://astroera.in/call/${astro.id}`}>Call</a> */}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <ChatRequestForm />
    </>
  );
};
