import "../assets/css/keyframes.css";
import "../assets/css/banner.css";
import "../assets/css/style.css";
import "../assets/css/homePage.css";
import arq5_1 from "../assets/img/arq5_1.jpg";
/* import animacionSifen from "../assets/img/integracion con sifen.png"; */
import animacionSifen from "../assets/integrarSIFEN.mp4";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      {/* SECCION 1: PORTADA PRINCIPAL */}

      <section>
        <div className="ewk_cont_banner">
          <div className="ewk_sombra">
            <h1 className="mt-5">TASSER SRL</h1>
            <h3>
              <p>Su Compañía en sus Necesidades</p>
            </h3>
            <hr />
            <div className="ewk_cont_banner_link">
              <a className="ewk_banner_link" href="#vision">
                <h5>Visión</h5>
              </a>
              <br />
              <a className="ewk_banner_link_1" href="#mision">
                <h5>Misión</h5>
              </a>
              <a className="ewk_banner_link_2 ml-2" href="valores">
                <h5>Valores</h5>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCION 2: ELECTRODOMESTICOS */}
      <section>
        <div id="vision" className="container">
          <div className="row ewk_cont_seccion_1">
            <div className="col-md-9">
              <h2>
                <b>Vision</b>
              </h2>
              {/* <p>
                <i>Crea que todo es posible</i>
              </p> */}
              <hr />
              <p>
                Nos vemos como vital recurso de pequeñas y grandes Compañías en
                sus Gestiones Gerenciales en las areas de Tecnologías, Servicios
                y Asesoramientos Informáticos.
              </p>
            </div>
            <div className="ewk_cont_seccion_1_link col-md-3 text-center">
              <a
                data-aos="fade-up"
                href="/electrodomesticos"
                className="btn btn-secondary btn-md"
              >
                Visita nuestra página
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCION 3: PORTADA ELECTROMECANICAS */}
      <section>
        <div id="mision" className="container">
          <div className="row ewk_cont_seccion_1">
            <div className="col-md-9">
              <h2>
                <b>Misión</b>
              </h2>
              <hr />
              <p>
                Proveer a nuestros Clientes Soluciones y Servicios de Alta
                Calidad. Para este propósito, acompañamos a nuestros
                colaboradores profesionales, mediante constantes capacitaciones
                y actualizaciones en todas las áreas y estar en el nivel de las
                exigencias.
              </p>
            </div>
            <div className="ewk_cont_seccion_1_link col-md-3 text-center">
              <a
                data-aos="fade-up"
                href="./electromecanica/electromecanica.html"
                className="btn btn-secondary btn-md"
              >
                Visita nuestra página
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="objetivo" className="container">
          <div className="row ewk_cont_seccion_1">
            <div className="col-md-9">
              <h2>
                <b>Objetivo</b>
              </h2>
              <hr />
              <p>
                Como empresa de desarrollo de software, nuestro objetivo es
                utilizar las más modernas tecnologías para brindar a la red
                empresarial; aplicaciones y software de última generación que
                logren automatizar todos los procesos con la mayor eficiencia y
                rentabilidad alcanzables y medibles mediante estándares
                normalmente utilizados.
              </p>
            </div>
            <div className="ewk_cont_seccion_1_link col-md-3 text-center">
              <a
                data-aos="fade-up"
                href="./electromecanica/electromecanica.html"
                className="btn btn-secondary btn-md"
              >
                Visita nuestra página
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCION 4: PORTADA ELECTRONICAS */}
      <section>
        <div className="container">
          <div className="row ewk_cont_seccion_1_link">
            <div className="col-md-6 ">
              <h2>Quiénes Somos</h2>
              <p>
                En TASSER SRL, somos un equipo de expertos en tecnología que se
                especializa en ofrecer soluciones integrales de servicios
                informáticos para empresas de todos los tamaños. Con años de
                experiencia en el sector y un compromiso continuo con la
                innovación, ayudamos a nuestros clientes a mejorar su
                eficiencia, seguridad y competitividad en el mercado.
              </p>

              {/* <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=5950983427870&text=Hola%20,gracias%20por visitarnos.%20"
              >
                <img src="../assets/img/iconos/whatsapp-fill.png"></img>
              </a>
              <a href="#">
                <i className="icon-linkedin"></i>
              </a>
              <a href="">
                <i className="icon-twitter"></i>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCGLKAojrhnU3Xtoj6azpUsg"
              >
                <i className="icon-youtube-play"></i>
              </a>
              <a href="">
                <i className="icon-facebook-squared"></i>
              </a> */}
            </div>

            <div className="col-md-6">
              <iframe
                data-aos="fade-down"
                width="100%"
                height="315"
                src={animacionSifen}
                /* src="https://www.youtube.com/embed/JEGzNzkpzIU" */
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {/* <p>IFRAME CACHO</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* SECCION 5: VARIEDADES */}
      <section>
        <div className="ewk_cont_banner_sec_3">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-4">
                <h2>Título de la seccion</h2>
                <p>
                  Similique excepturi voluptates placeat ducimus delectus magnam
                  tempore dolore dolorem quisquam porro modi voluptatum eum
                  saepe dolorum ratione officia sint eos minus
                </p>
                <a
                  className="btn btn-secondary btn-md"
                  href="https://ewebik.com.mx/"
                >
                  Portafolio
                </a>
              </div>
              <div className="col-md-8 ewk_cont_div_img ewk_cont_img"></div> */}
              <div className="row">
                {/* <div className="col-md-4"> */}
                <div className="col-md-12">
                  <h2>Servicios que Ofrecemos</h2>
                  <ul>
                    <li className="p-2">
                      <u>Desarrollo de Software a Medida:</u> Diseñamos y
                      desarrollamos soluciones de software personalizadas para
                      satisfacer las necesidades específicas de cada cliente, en
                      una o en todas las áreas que componen el ERP.
                    </li>
                    <li className="p-2">
                      <u>Consultoría y Estrategia IT:</u> Brindamos asesoría
                      especializada para desarrollar estrategias de
                      transformación digital y optimización de sistemas,
                      ayudando a nuestros clientes a alinearse con las
                      tendencias tecnológicas más recientes.
                    </li>
                    <li className="p-2">
                      <u>Soporte y Mantenimiento:</u> Ofrecemos soporte técnico
                      continuo y mantenimiento para garantizar que los sistemas
                      de nuestros clientes funcionen de manera óptima y segura
                      en todo momento.
                    </li>
                    <li className="p-2">
                      <u>Ciberseguridad:</u> Protegemos la información de
                      nuestros clientes mediante la implementación de protocolos
                      avanzados de seguridad y gestión de riesgos.
                    </li>
                    <li className="p-2">
                      <u>Cloud Computing:</u> Ayudamos a las empresas a migrar
                      sus operaciones a la nube, mejorando la accesibilidad y
                      eficiencia de sus procesos.
                    </li>
                  </ul>
                  <a className="btn btn-secondary btn-md" href="/servicios">
                    Más sobre servicios!
                  </a>
                </div>

                {/* <div className="col-md-8 ewk_cont_img text-center">
                  <img
                    data-aos="fade-right"
                    src={arq5_1}
                    className="img-fluid"
                    alt="diseño arquitectonico"
                  />
                </div> */}
                {/* <div className="col-md-8 ewk_cont_img text-center"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <hr />
              <h2>Servicios</h2>
              <p>Todo lo encuentras en TASSER SRL</p>
              <hr />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <a href="/asesoramientos">
                <img
                  data-aos="fade-left"
                  src={arq5_1}
                  className="img-fluid"
                  alt="diseño arquitectonico"
                ></img>
                <h3>Asesoramientos</h3>
                <p>React JS / Node JS</p>
              </a>
            </div>
            <div className="col-md-4">
              <img
                data-aos="fade-up-right"
                src={arq5_1}
                className="img-fluid"
                alt="diseño arquitectonico"
              ></img>
              <h3>Aplicaciones Móviles</h3>
              <p>Xamarin / Android</p>
            </div>
            <div className="col-md-4">
              <img
                data-aos="fade-up-left"
                src={arq5_1}
                className="img-fluid"
                alt="diseño arquitectonico"
              ></img>
              <h3>Posicionamiento Web</h3>
              <p>SEO / Optimización de código</p>
            </div>
          </div>
        </div>
      </section>

      {/* <footer>
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

                <p>
                  Aprende Diseño web en el 2019, te aseguro no te arrepnteras
                </p>
                <p>Enero 2019</p>

                <hr />

                <p>
                  Visita mi sitio web y siguenos en redes sociales y sobre todo
                  da like a este video
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
      </footer> */}
      <Footer />
    </>
  );
}

export default HomePage;
