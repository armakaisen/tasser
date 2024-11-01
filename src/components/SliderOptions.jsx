import ekuatia from "../style/img/fact-ele-ekuatia.jpg";
import servidores from "../style/img/servidores.jpg";
import tranmautritan from "../style/img/pexels-tranmautritam-326503.jpg";

export const SliderOptions = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active contenedor slide_imagenes">
          <img className="d-block w-100 " src={ekuatia} alt="First slide" />
        </div>
        <div className="carousel-item contenedor slide_imagenes">
          <img className="d-block w-100 " src={servidores} alt="Second slide" />
        </div>
        <div className="carousel-item contenedor slide_imagenes">
          <img
            className="d-block w-100 "
            src={tranmautritan}
            alt="Third slide"
          />
        </div>
      </div>
      {/* <a
        className="carousel-control-prev"
        href="#TASSER SRL, Tecnología Aplicada - Soluciones y Servicios"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#TASSER SRL, Tecnología Aplicada - Soluciones y Servicios"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a> */}
      <a
        className="carousel-control-prev"
        /* href="#carouselExampleControls" */
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        /* href="#carouselExampleControls" */
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
{
  {
    /* <div>
      <h5>hola</h5>
      <Slider {...setting}>
        {images.map((img, index) => {
          <div key={index}>
            <img src={{ img }} alt="slide" />
            {img}
          </div>;
        })}
      </Slider>
    </div> */
  }
  /* <Slider>
  {images.map((img, index) => {
    <div key={index}>
      <img src={img} alt="slide" />
      {img}
    </div>;
  })}
</Slider> */
}
