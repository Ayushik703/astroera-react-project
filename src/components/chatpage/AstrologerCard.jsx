import { useState, useEffect } from "react";
import "./AstrologerCard.css";

export const AstrologerCard = () => {
  const [astrologer, setAstrologer] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAstrologers = async () => {
      try {
        const res = await fetch("https://astroera.in/api/chat-with-astrologer");
        const fetchedData = await res.json(); // Converting the Raw response (res) to .json data

        console.log("RAW RESPONSE:", fetchedData); // 👈 check what you get

        // fetchedData here contain all the data in json object
        if (fetchedData.experts && fetchedData.experts.length > 0) {
          setAstrologer(fetchedData.experts);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("FETCH ERROR:", err);
        setError(true);
      }
    };
    fetchAstrologers();
  }, []);

  if (error) {
    return <p>The astrologers are not available!</p>;
  }

  return (
    <>
      <div className="astrologer-card-div">
        <div className="container">
          <div className="row">
            {astrologer.map((elem) => (
              <div className="col-lg-4 col-md-4 col-12" key={elem.user_id}>
                <div className="astrologer-card">
                  <div className="left-card-side">
                    <div className="verified-img">
                      <img
                        src="https://astroera.in/public/frontend/img/verified.png"
                        alt="Verofied"
                        width="20"
                        height="20"
                      />
                    </div>
                    <div className="astro-profile-img">
                      <img
                        src={`https://astroera.in${elem.image_path}${elem.image}`}
                        alt={elem.name}
                        width="73"
                        height="73"
                      />
                    </div>
                    <div className="astrologer-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className="fa fa-star rating-stars"
                          style={{
                            color: i < elem.rating ? "#ffa200" : "grey",
                          }}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <div className="right-card-side">
                    <a
                      href={`https://astroera.in/astrologer/${elem.slug}/${elem.user_id}`}
                      className="astrologer-name"
                    >
                      {elem.name}
                    </a>
                    <div className="span-div">
                      <span>Exp: {elem.experience} Years</span>
                      <span>{elem.skills}</span>
                      <span>{elem.language_name}</span>
                    </div>
                    <div className="avail-cost">
                      <button>Chat</button>
                      {elem.is_promotional_accept == 1} ? (
                      <p>
                        Free
                        <span className="text-decoration-line-through text-muted">
                          {elem.astro_chat_charges}
                        </span>
                        <small>/min</small>
                      </p>
                      ) : (
                      <p>
                        {elem.astro_chat_charges}
                        <small>/min</small>
                      </p>
                      )
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
