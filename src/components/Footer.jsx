import React from "react";
import arq5_1 from "../assets/img/arq5_1.jpg";
function Footer() {
  return (
    <footer>
      <div className="ewk_cont_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>EWebik</h2>
              <p>
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
            </div>
            <div className="col-md-3">
              <h2>Categorías</h2>
              <p href="#">Inicio</p>
              <p href="#">Conocenos</p>
              <p href="#">Proyectos</p>
              <p href="#">Escribenos</p>
            </div>
            <div className="col-md-3">
              <h2>Recomendado</h2>

              <p>Aprende Diseño web en el 2019, te aseguro no te arrepnteras</p>
              <p>Enero 2019</p>

              <hr />

              <p>
                Visita mi sitio web y siguenos en redes sociales y sobre todo da
                like a este video
              </p>
              <p>Enero 2019</p>
            </div>
            <div className="col-md-3 ewk_cont_img_footer">
              <img
                data-aos="fade-down-right"
                src={arq5_1}
                className="img-fluid"
                alt="diseño arquitectonico"
              ></img>
              <h3>EWebik</h3>
              <p>Electrónica y Diseño Web</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
