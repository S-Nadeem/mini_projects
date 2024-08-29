import { useEffect, useState } from "react";
import "./styles.css";

export default function CustomScroll() {
  const [scrollproducts, setScrollproducts] = useState([]);
  const [error, seterror] = useState();
  const [loading, setloading] = useState(false);
  const [scrollPercentage, setscrollPdercentage] = useState();

  const fetchScrollProducts = async () => {
    try {
      setloading(true);
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setScrollproducts(data.products);
        setloading(false);
      }
    } catch (e) {
      seterror(e.message);
      setloading(false);
    }
  };

  const handleScrolllPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const howmuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setscrollPdercentage((howmuchScrolled / height) * 100);
    console.log((howmuchScrolled / height) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrolllPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    fetchScrollProducts();
  }, []);

  if (error) {
    return <div>Error Ocuured , Please try again Later</div>;
  }

  return (
    <>
      <div className="top_container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll_progress_container">
          <div
            className="progress_bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="scroll_container">
        {scrollproducts && scrollproducts.length
          ? scrollproducts.map((product) => {
              return (
                <div key={product.id}>
                  <p>{product.title}</p>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
