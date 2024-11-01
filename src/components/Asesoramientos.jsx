import React from "react";
import instalaciones from "../assets/img/instalaciones-de-red.png";

export const Asesoramientos = () => {
  return (
    <div className="container mt-5">
      <h2>TASSER SRL - Asesoría Tecnológica</h2>
      <section>
        <div className="row mt-5">
          <div className="col-md-8">
            <p>
              Con el avance constante de la tecnología y el crecimiento de las
              operaciones comerciales, la empresa se enfrenta al desafío de
              mantener sus sistemas informáticos actualizados y seguros. Tasser
              SRL tiene tiene como objetivo evaluar el estado actual de su
              infraestructura y sugerir mejoras que optimicen la eficiencia,
              seguridad y sostenibilidad a largo plazo.
            </p>
          </div>
          <div className="col-md-4">
            <img
              data-aos="fade-left"
              src={instalaciones}
              className="img-fluid"
              alt="diseño arquitectonico"
            ></img>
          </div>
        </div>
      </section>
      <section>
        <h3>Nuestro Método</h3>
        <ul>
          <li>
            Análisis del Estado Actual Inicialmente, es crucial llevar a cabo
            una auditoría completa de la infraestructura tecnológica actual,
            incluyendo: Hardware: Revisar el rendimiento y estado de los
            servidores, computadoras y dispositivos de red. Software: Evaluar
            las aplicaciones utilizadas, su actualización y la compatibilidad
            entre ellas. Seguridad: Analizar el estado de las políticas de
            seguridad, cifrado de datos y defensa contra amenazas. Este análisis
            permitirá identificar cuellos de botella, vulnerabilidades y
            necesidades de mejora.
          </li>
        </ul>
      </section>

      <p>
        2. Propuesta de Mejoras a) Virtualización y Computación en la Nube Se
        recomienda migrar gradualmente a un sistema de virtualización o a la
        nube, lo que puede reducir los costos en hardware y permitir una mayor
        escalabilidad. Algunas ventajas clave incluyen: Escalabilidad:
        Crecimiento flexible de los recursos según la demanda. Reducción de
        costos: Menor inversión en mantenimiento de hardware físico. Respaldo y
        recuperación: Acceso a servicios de recuperación y respaldo más
        eficientes. b) Implementación de Seguridad Avanzada Es fundamental
        fortalecer la seguridad con medidas de última generación: Autenticación
        Multifactor (MFA): Mejora la seguridad al añadir una capa adicional de
        autenticación. Cifrado de datos y respaldo regular: Proteger información
        sensible para cumplir con normativas de privacidad. Capacitación de
        empleados: Fomentar una cultura de seguridad a través de talleres de
        concienciación. c) Optimización de la Red y de la Conectividad Es
        importante optimizar la infraestructura de red para un funcionamiento
        continuo y sin interrupciones: Optimización de ancho de banda: Asegurar
        que la red soporte la demanda sin latencias. Actualización de routers y
        switches: Mejor rendimiento y seguridad con dispositivos de última
        generación. Redundancia en red: Contar con rutas alternativas para
        minimizar tiempos de inactividad. 3. Capacitación Continua Para sacar el
        máximo provecho de las nuevas tecnologías implementadas, se recomienda
        un programa de capacitación continua para el personal, enfocándose en:
        Manejo de sistemas actualizados Conciencia y prácticas de ciberseguridad
        Uso eficiente de nuevas herramientas de productividad Conclusión El
        asesoramiento en estas áreas permitirá a la empresa mejorar la
        eficiencia operativa, reducir riesgos y optimizar los recursos
        tecnológicos de manera rentable. Con una inversión inicial en
        optimización y seguridad, la empresa podrá garantizar una
        infraestructura más robusta y adaptada a los cambios tecnológicos
        futuros.
      </p>
    </div>
  );
};
