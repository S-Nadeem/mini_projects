import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setimages] = useState([]);
  const [currentSlide, setcurrentSlide] = useState(1);
  const [erroMsg, seterroMsg] = useState(null);
  const [loading, setloading] = useState(false);

  const previousSlide = () => {
    setcurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setcurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const fetchImages = async (getUrl) => {
    try {
      setloading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setimages(data);
        setloading(false);
      }
    } catch (e) {
      seterroMsg(e.message);
      setloading(false);
    }
  };

  useEffect(() => {
    if (url !== null) {
      fetchImages(url);
    }
  }, [url]);

  useEffect(() => {
    setcurrentSlide(0);
  }, []);

  if (loading) {
    return <div>Loading !.. Please wait</div>;
  }

  if (erroMsg !== null) {
    return <div>Error Occured</div>;
  }

  return (
    <div className="container">
      <div className="image-container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                className={
                  currentSlide === index
                    ? "current_image"
                    : "current_image hide_current-image"
                }
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
              />
            ))
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="circle_indiccators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "button_indicator"
                      : "button_indicator hide_button_indicator"
                  }
                  onClick={() => setcurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
