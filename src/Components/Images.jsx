import React from "react";

const img1 =
  "https://images.pushsquare.com/423e94e624ad0/marvels-avengers-everything-we-know-so-far-guide-1.900x.jpg";
const img2 =
  "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg";
const img3 =
  "https://vignette.wikia.nocookie.net/marvelmovies/images/f/fa/Avengers_%28The_Whole_Team%29.png/revision/latest/scale-to-width-down/340?cb=20190526222205";

function Images() {
  return (
    <div>
      <ul>
        <img
          className="avenger-img"
          src={img1 + "?grayscale"}
          alt="These are avengers"
        />
        <img className="avenger-img" src={img2} alt="These are avengers" />
        <img className="avenger-img" src={img3} alt="These are avengers" />
      </ul>
    </div>
  );
}

export default Images;
