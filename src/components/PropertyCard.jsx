import React from 'react';

function PropertyCard({ propiedad, setPropiedadSeleccionada }) {
  // Formatear el precio con puntos para que se vea más profesional
  const precioFormateado = new Intl.NumberFormat('es-CL').format(propiedad.precio);

  return (
    <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden hover-shadow-transition">
      {/* Imagen de la propiedad */}
      <div className="position-relative">
        <img 
          src={propiedad.imagen} 
          className="card-img-top" 
          alt={propiedad.titulo}
          style={{ height: '220px', objectFit: 'cover' }}
        />
        <span className={`position-absolute top-0 start-0 m-3 badge ${propiedad.tipo === 'casa' ? 'bg-primary' : 'bg-success'} text-capitalize px-3 py-2 shadow-sm`}>
          {propiedad.tipo}
        </span>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="card-body d-flex flex-column">
        <div className="mb-2 text-muted small">
          <i className="bi bi-geo-alt-fill text-danger me-1"></i> {propiedad.comuna}, Chile
        </div>
        
        <h5 className="card-title fw-bold text-dark text-truncate mb-2" title={propiedad.titulo}>
          {propiedad.titulo}
        </h5>

        <h4 className="text-primary fw-bold mb-3">
          {precioFormateado} <span className="fs-6 fw-normal text-secondary">UF</span>
        </h4>

        {/* Características Técnicas (Iconos) */}
        <div className="row g-2 text-center text-secondary bg-light rounded p-2 mb-3 mt-auto">
          <div className="col-4 border-end">
            <div className="small text-muted">Hab.</div>
            <div className="fw-bold text-dark"><i className="bi bi-door-open me-1"></i>{propiedad.habitaciones}</div>
          </div>
          <div className="col-4 border-end">
            <div className="small text-muted">Baños</div>
            <div className="fw-bold text-dark"><i className="bi bi-droplet me-1"></i>{propiedad.banos}</div>
          </div>
          <div className="col-4">
            <div className="small text-muted">M²</div>
            <div className="fw-bold text-dark"><i className="bi bi-ruler me-1"></i>{propiedad.superficie}</div>
          </div>
        </div>

        {/* Botón CTA para abrir el Modal (Próximo requisito) */}
        <button 
          className="btn btn-outline-primary w-100 fw-semibold"
          data-bs-toggle="modal" 
          data-bs-target="#propertyModal"
          onClick={() => setPropiedadSeleccionada(propiedad)}
        >
          <i className="bi bi-images me-2"></i> Ver Galería y Detalles
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;