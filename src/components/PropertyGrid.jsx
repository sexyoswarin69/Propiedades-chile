import React from 'react';
import PropertyCard from './PropertyCard';

function PropertyGrid({ propiedades, setPropiedadSeleccionada }) {
  // Manejo de caso cuando ningún filtro coincide
  if (propiedades.length === 0) {
    return (
      <div className="text-center py-5 my-4">
        <i className="bi bi-house-exclamation text-coral display-1"></i>
        <h3 className="mt-3 fw-bold text-secondary">No se encontraron propiedades</h3>
        <p className="text-muted">Prueba cambiando los criterios de búsqueda o limpiando los filtros avanzados.</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {propiedades.map((propiedad) => (
        <div key={propiedad.id} className="col-12 col-md-6 col-lg-4">
          <PropertyCard 
            propiedad={propiedad} 
            setPropiedadSeleccionada={setPropiedadSeleccionada} 
          />
        </div>
      ))}
    </div>
  );
}

export default PropertyGrid;