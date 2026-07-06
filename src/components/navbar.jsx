import React from 'react';

function Navbar({ filtros, setFiltros }) {
  const handleBusquedaChange = (e) => {
    setFiltros({
      ...filtros,
      busqueda: e.target.value
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm border-bottom">
      <div className="container">
        {/* Logo / Marca */}
        <a className="navbar-brand d-flex align-items-center" href="#!">
          <i className="bi bi-building-house me-2 text-coral fs-3"></i>
          <span className="fw-bold tracking-tight">Propiedad Chile</span>
        </a>

        {/* Botón Hamburguesa para Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#!">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#propiedades-seccion">Propiedades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#financiamiento-seccion">Financiamiento</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto-seccion">Contacto</a>
            </li>
          </ul>

          {/* Buscador Integrado en el Navbar */}
          <div className="d-flex" role="search">
            <div className="input-group">
              <span className="input-group-text bg-light text-coral border-0">
                <i className="bi bi-search"></i>
              </span>
              <input 
                className="form-control" 
                type="search" 
                placeholder="Buscar por título o comuna..." 
                aria-label="Buscar"
                value={filtros.busqueda}
                onChange={handleBusquedaChange}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;