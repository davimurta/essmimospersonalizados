import { useEffect, useState } from "react";
import "./product.css";
import { ChevronDown, NotebookTabs } from "lucide-react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/produtos.json");
        if (!response.ok) {
          throw new Error("Erro ao buscar o arquivo JSON.");
        }
        const data = await response.json();
        
        const foundProduct = data.find((p) => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);

          if (foundProduct.image && foundProduct.image.length > 0) {
            setSelectedImage(foundProduct.image[0]);
          } else {
            setError("Nenhuma imagem disponível para este produto.");
          }
        } else {
          setError("Produto não encontrado");
        }
      } catch (err) {
        setError("Erro ao carregar o produto: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return null;
  }

  return (
    <div className="productContainer">
      <div className="picContainer">
        <div className="firstPic">
          <img src={selectedImage} alt="Produto" className="mainImage" />
        </div>
        <div className="outherPic">
          {product.image.map((image, index) => (
            <div key={index} className="picture" onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Produto miniatura ${index}`} className="thumbnail" />
            </div>
          ))}
        </div>
      </div>

      <div className="productInfo">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <span>R$ {product.price}</span>
        <a href="https://wa.me/5531986453223?text=Olá%2C%20gostaria%20de%20encomendar%20um%20produto." target="_blank">Encomendar</a>

        <div className="FTContainer">
          <p className={isActive ? "ativo" : ""} onClick={handleClick}>
            <NotebookTabs /> Ficha técnica <ChevronDown className="chevronList" />
          </p>
          <ul className="fichaTecnica">
            {product.ficha.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
