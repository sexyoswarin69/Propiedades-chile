import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto border-top border-warning border-3">
      <div className="container">
        <div className="row g-4 mb-4">
          
          {/* Columna 1: Info Empresa */}
          <div className="col-12 col-md-6 col-lg-4">
            <h5 className="text-warning fw-bold mb-3">
              <i className="bi bi-building-house me-2"></i>Propiedad Chile
            </h5>
            <p className="text-muted small lh-base">
              Somos la plataforma líder en corretaje digital y búsqueda de propiedades a lo largo de todo el territorio nacional chileno. Tu próximo hogar está a un clic.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="col-6 col-lg-4 px-md-5">
            <h6 className="fw-bold text-light mb-3">Navegación</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2"><a href="#!" className="text-decoration-none text-muted hover-link">Inicio</a></li>
              <li className="mb-2"><a href="#propiedades-seccion" className="text-decoration-none text-muted hover-link">Propiedades</a></li>
              <li className="mb-2"><a href="#financiamiento-seccion" className="text-decoration-none text-muted hover-link">Financiamiento</a></li>
              <li className="mb-2"><a href="#contacto-seccion" className="text-decoration-none text-muted hover-link">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto Legal / INACAP */}
          <div className="col-6 col-md-6 col-lg-4">
            <h6 className="fw-bold text-light mb-3">Información Académica</h6>
            <p className="text-muted small mb-1"><strong>Asignatura:</strong> Desarrollo Web Avanzado</p>
            <p className="text-muted small mb-1"><strong>Sede:</strong> INACAP Renca</p>
            <p className="text-muted small mb-0"><strong>Fecha:</strong> Junio 2026</p>
          </div>

        </div>

        <hr className="border-secondary mb-3" />

        {/* Derechos Reservados */}
        <div className="row align-items-center text-center text-md-start small text-muted">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} Propiedad Chile. Todos los derechos reservados.
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <span className="me-3"><i className="bi bi-shield-check me-1"></i> Evaluación Final React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;