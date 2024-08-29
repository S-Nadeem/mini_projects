import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData({ url, limit }) {
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [disablebtn, setdisablebtn] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();

  const fetchProducts = async (getUrl) => {
    try {
      setloading(true);
      const response = await fetch(
        `${getUrl}?limit=${limit}&skip=${count === 0 ? 0 : count * limit}`
      );
      const data = await response.json();

      console.log(data);
      if (data) {
        setproducts((prev) => [...prev, ...data.products]);
        setloading(false);
      }
    } catch (e) {
      seterror(e.message);
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setdisablebtn(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading Please wait!!!</div>;
  }
  if (error) {
    return <div>Error Ocuured, Please try again later</div>;
  }

  return (
    <>
      <div className="product_container">
        <div className="image_container">
          {products && products.length
            ? products.map((item) => {
                return (
                  <div key={item.id} className="product_image">
                    <img src={item.thumbnail} alt="" />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div>
                      rating: <b>{item.rating}</b>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="button_container">
        <button
          disabled={disablebtn}
          onClick={() => setcount(count + 1)}
          className="loadMoreButton"
        >
          Load More
        </button>
        {disablebtn ? <p>You have reached 100 products</p> : null}
      </div>
    </>
  );
}
