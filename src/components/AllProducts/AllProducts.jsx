import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./allproducts.css";

const AllProducts = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/produtos.json")
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search") || searchTerm;
    const categoryQuery = searchParams.get("categoria");

    const filtered = data.filter((item) => {
      const matchesSearch = searchQuery 
        ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) 
        : true;

      const matchesCategory = categoryQuery 
        ? item.categorias && item.categorias.some(category => category.toLowerCase() === categoryQuery.toLowerCase())
        : true;

      return matchesSearch && matchesCategory;
    });

    setFilteredData(filtered);
  }, [data, location.search, searchTerm]);

  const searchFor = location.search.split("=");

  return (
    <>
      <div className="titleContainer">
        <h1>Pesquisando por: {searchFor[1]}</h1>
      </div>
      <div className="searchContainer">
        {filteredData.map((item) => {
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
        {/* Se não houver produtos filtrados, a página apenas fica vazia */}
      </div>
    </>
  );
};

AllProducts.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default AllProducts;
