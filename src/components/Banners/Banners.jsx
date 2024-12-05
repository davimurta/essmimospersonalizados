import "./banners.css";

const Banners = () => {
  return (
    <>
      <div className="banners-container">
        <div className="title">
          <h2>OS MAIS PROCURADOS</h2>
        </div>
        <div className="grid-container">
          <div className="item">
            <img src="/4.png" alt="" />
          </div>
          <div className="item">
            <img src="/5.png" alt="" />
          </div>
          <div className="item">
            <img src="/2.png" alt="" />
          </div>
          <div className="item">
            <img src="/3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;
