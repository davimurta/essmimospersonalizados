import { useEffect, useState, useRef } from "react";
import "./carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("/produtos.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 290;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 290;
  };

  if (!data || !data.length) return null;

  return (
    <>
      <div className="title">
        <h2>DESTAQUES</h2>
      </div>
      <div className="container">
        <button className="carousel-button" onClick={handleLeftClick}>
          <ChevronLeft className="Chevron" />
        </button>
        <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, image } = item;
          return (
            <div className="card" key={id}>
              <div className="cardImg">
                <img src={image[0]} alt={name} />
              </div>
              <div className="cardInfo">
                <span className="cardTitle cardText">{name}</span>
                <span className="cardPrice cardText">R$ {price}</span>
                <div className="cardButton">
                  <Link className="seeMore" to={`/order/${id}`}>VER MAIS</Link>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        <button className="carousel-button" onClick={handleRightClick}>
          <ChevronRight className="Chevron" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
