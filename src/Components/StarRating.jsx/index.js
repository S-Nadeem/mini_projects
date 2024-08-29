import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noofStars = 10 }) {
  const [hover, sethover] = useState(0);
  const [rating, setrating] = useState(0);
  const handleClick = (getCurrentId) => {
    setrating(getCurrentId);
  };
  const handleMouseon = (getCurrentId) => {
    sethover(getCurrentId);
  };
  const handlemouseLeave = () => {
    sethover(rating);
  };
  return (
    <div className="star_wrapper">
      {[...Array(noofStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            size={40}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseon(index)}
            onMouseLeave={() => handlemouseLeave()}
          />
        );
      })}
    </div>
  );
}
