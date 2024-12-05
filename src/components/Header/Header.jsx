import { AlignJustify, Search } from "lucide-react";
import "./header.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header({ setSearchTerm }) {
  const [isActive, setIsActive] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchInput.trim() !== "") {
      navigate(`/search?search=${searchInput}`);
    }
  };

  const handleSearchIconClick = () => {
    if (searchInput.trim() !== "") {
      navigate(`/search?search=${searchInput}`);
    }
  };

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleCategoryClick = (category) => {
    navigate(`/search?categoria=${category}`);
    !isOpened
  };

  return (
    <>
      <header>
        <nav className={isOpened ? "aberto" : "fechado"}>
          <div>
          <ul className="links">
          <li>
            <button
              onClick={() => handleCategoryClick("novidades")}
              className="nav-link"
            >
              Novidades
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleClick();
                handleCategoryClick("papelaria");
              }}
              className={isActive ? "active nav-link" : "nav-link"}
            >
              Papelaria
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("personalizados")}
              className="nav-link"
            >
              Personalizados
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("maternidade")}
              className="nav-link"
            >
              Maternidade
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("promocoes")}
              className="nav-link"
            >
              Promoções
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("outros")}
              className="nav-link"
            >
              Outros
            </button>
          </li>
        </ul>
          </div>
        </nav>
        <div className="container header-container">
          <div className="logo">
            <a href="/">
              <img src="/logo-header.png" alt="Logo" />
            </a>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                setSearchTerm(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearchIconClick}
              className="search-icon-button"
            >
              <Search className="search-icon" />
            </button>
            <div className="mobileMenu" onClick={handleOpen}>
              <AlignJustify className="menu" />
            </div>
          </div>
        </div>
      </header>
      <nav>
        <ul className="links">
          <li>
            <button
              onClick={() => handleCategoryClick("novidades")}
              className="nav-link"
            >
              Novidades
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                handleClick();
                handleCategoryClick("papelaria");
              }}
              className={isActive ? "active nav-link" : "nav-link"}
            >
              Papelaria
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("personalizados")}
              className="nav-link"
            >
              Personalizados
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("maternidade")}
              className="nav-link"
            >
              Maternidade
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("promocoes")}
              className="nav-link"
            >
              Promoções
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryClick("outros")}
              className="nav-link"
            >
              Outros
            </button>
          </li>
        </ul>
      </nav>
      <div></div>
    </>
  );
}

Header.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Header;
