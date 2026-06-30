import React from 'react';

function Filters({ filtros, setFiltros }) {
  const handleCambio = (e) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value
    });
  };

  const limpiarFiltros = () => {
    setFiltros({
      busqueda: '',
      tipo: '',
      precioMax: ''
    });
  };

  return (
    <div className="card shadow-sm border-0 mb-4 p-4 bg-white rounded-3">
      <h5 className="card-title mb-3 fw-bold text-secondary">
        <i className="bi bi-sliders me-2 text-primary"></i> Búsqueda Avanzada
      </h5>
      <div className="row g-3 align-items-end">
        {/* Filtro Tipo */}
        <div className="col-12 col-md-4">
          <label className="form-label fw-semibold text-muted small">Tipo de Propiedad</label>
          <select 
            className="form-select" 
            name="tipo" 
            value={filtros.tipo} 
            onChange={handleCambio}
          >
            <option value="">Todos los tipos</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
          </select>
        </div>

        {/* Filtro Precio Máximo */}
        <div className="col-12 col-md-4">
          <label className="form-label fw-semibold text-muted small">Precio Máximo (UF)</label>
          <select 
            className="form-select" 
            name="precioMax" 
            value={filtros.precioMax} 
            onChange={handleCambio}
          >
            <option value="">Cualquier precio</option>
            <option value="3000">Hasta 3.000 UF</option>
            <option value="7000">Hasta 7.000 UF</option>
            <option value="10000">Hasta 10.000 UF</option>
            <option value="15000">Hasta 15.000 UF</option>
          </select>
        </div>

        {/* Botón de Limpiar */}
        <div className="col-12 col-md-4 d-grid">
          <button 
            className="btn btn-outline-danger" 
            onClick={limpiarFiltros}
            type="button"
          >
            <i className="bi bi-trash-fill me-1"></i> Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;