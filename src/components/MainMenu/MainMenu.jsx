import React, { useEffect, useState } from "react";
import "./MainMenu.css";

const MainMenu = () => {
  const [profileImg, setProfileImg] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=face&client_id=MbE1XMj7pdRElJnfBN5e6QwLAPi9WegETpvvo5W92_Y";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProfileImg(data.results.map((dt) => dt.urls.small));
        setRandomIndex(Math.floor(Math.random() * data.results.length));
      });
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <h1>
              <u>Read A.T.W</u>
            </h1>
          </a>
        </div>
        <div className="profile">
          <img src={profileImg[randomIndex]} alt="Profile image" />
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
