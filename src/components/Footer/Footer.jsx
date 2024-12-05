import { Instagram, Mail } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="logoFooter">
          <img src="/logo-header.png" alt="" />
          <a
            href="https://www.instagram.com/ess.mimospersonalizados/"
            className="instagram"
          >
            <Instagram /> @ess.mimospersonalizados
          </a>
        </div>
        <div className="linkRow">
          {/* <div className="linksContainer">
            <h4>Categorias</h4>
            <div className="linksList">
              <div>
                <ul>
                  <li>
                    <a href="">link</a>
                  </li>
                  <li>
                    <a href="">link</a>
                  </li>
                  <li>
                    <a href="">link</a>
                  </li>
                  <li>
                    <a href="">link</a>
                  </li>
                  <li>
                    <a href="">link</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="">link</a>
                  </li>
                  <li>
                    <a href="">link</a>
                  </li>
                  <li>
                    <a href="">link</a>
                  </li>
                  <li>
                    <a href="">link</a>
                  </li>
                  <li>
                    <a href="">link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="contatosContainer">
            <div className="contatdoTitle">
              <h4>Contatos</h4>
            </div>
            <div className="contatos">
              <span>
                <img src="/whatzapp.svg" alt="" className="whatzappSvg" /> +55
                (31) 98645-3223
              </span>
              <span>
                <Mail /> danielelamounier@gmail.com
              </span>
            </div>
          </div>
          <div className="character">
            <img src="/character.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-botton" />
    </footer>
  );
};

export default Footer;
