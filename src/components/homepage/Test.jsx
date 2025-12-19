import { useEffect, useState } from "react";

export const Test = () => {
  const [cart, setCart] = useState(0);

  const handleDecrement = () => {
    setCart(() => cart - 1);
  };

  const handleIncrement = () => {
    setCart(() => cart + 1);
  };

  return (
    <>
      <p>{cart}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

const users = [
  { name: "Ayushi", age: 26 },
  { name: "Anjali", age: 27 },
  { name: "Arti", age: 25 },
  { name: "Ankita", age: 26 },
  { name: "Kanchu", age: 26 },
];

export const Drivestate = () => {
  return (
    <>
      <div className="parent-elm">
        <ul className="pat">
          {users.map((eve, index) => {
            return (
              <li key={index}>
                <p>{eve.name}</p>
                <span>{eve.age}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export const Userdrivetstate = () => {
  const [userData, setuserData] = useState([
    { name: "Ayushi", age: 26 },
    { name: "Anjali", age: 27 },
    { name: "Arti", age: 25 },
    { name: "Ankita", age: 26 },
    { name: "Kanchu", age: 26 },
  ]);
  return (
    <>
      <ul className="mt-5">
        {userData.map((even, index) => {
          return (
            <li key={index}>
              <p>{even.name}</p>
              <span>{even.age}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// fetches user data from an API only once when the component loads
export const TestuseState = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetachApi = async () => {
      const res = await fetch("https://astroera.in/api/liveAstro");
      const data = await res.json();
      console.log(data);
      setUser(data.live_astrologer || []);
    };
    fetachApi();
  }, []); // empty array[] for fetching api data only once

  return (
    <>
      <div>
        <h2>Astrologer name</h2>
        {user.map((elem) => (
          <p key={elem.id}>
            <span>{elem.name}</span> - <span>{elem.mobile}</span>
          </p>
        ))}
      </div>
    </>
  );
};

export const RandomNum = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const fetchCountData = async () => {
      const res = await fetch(`https://api.agify.io/?name=${count}`);
      const data = await res.json();
      setNumber(data.age);
    };
    fetchCountData();
  }, [count]);

  return (
    <>
      <div className="mt-5">
        <p>Random number = {number}</p>
        <button onClick={() => setCount(count + 1)}>Get number</button>
      </div>
    </>
  );
};

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timers = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return clearInterval(timers);
  }, []);

  return <h2>Time: {seconds}s</h2>;
};
