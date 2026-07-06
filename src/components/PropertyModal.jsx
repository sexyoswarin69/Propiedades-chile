import React from 'react';

function PropertyModal({ propiedad }) {
  // Si no hay ninguna propiedad seleccionada todavía, retornamos null para que no rompa la app
  if (!propiedad) return null;

  const precioFormateado = new Intl.NumberFormat('es-CL').format(propiedad.precio);

  return (
    <div 
      className="modal fade" 
      id="propertyModal" 
      tabIndex="-1" 
      aria-labelledby="propertyModalLabel" 
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          
          {/* Encabezado del Modal */}
          <div className="modal-header bg-slate text-white">
            <h5 className="modal-title fw-bold" id="propertyModalLabel">
              <i className="bi bi-house-fill text-coral me-2"></i>
              {propiedad.titulo}
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              data-bs-dismiss="modal" 
              aria-label="Close"
            ></button>
          </div>

          {/* Cuerpo del Modal */}
          <div className="modal-body p-4">
            
            {/* Galería de Fotos - Grid de Bootstrap */}
            <h6 className="fw-bold text-secondary mb-3">
              <i className="bi bi-images me-2"></i>Galería de Imágenes
            </h6>
            <div className="row g-2 mb-4">
              {/* Imagen Principal Grande */}
              <div className="col-12">
                <img 
                  src={propiedad.imagen} 
                  alt="Principal" 
                  className="img-fluid rounded-3 w-100 shadow-sm" 
                  style={{ maxHeight: '350px', objectFit: 'cover' }}
                />
              </div>
              
              {/* Imágenes Secundarias (Mapeo de la galería interna) */}
              {propiedad.galeria && propiedad.galeria.map((imgUrl, index) => (
                <div key={index} className="col-4">
                  <img 
                    src={imgUrl} 
                    alt={`Galería ${index + 1}`} 
                    className="img-fluid rounded-2 w-100 shadow-sm border"
                    style={{ height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => {
                      // Opcional: Se podría expandir para cambiar la imagen principal al hacer clic
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Información Detallada */}
            <div className="row bg-light rounded p-3 mb-4 g-3 mx-0">
              <div className="col-6 col-md-3 text-center border-end">
                <span className="text-muted small d-block">Precio</span>
                <strong className="text-primary fs-5">{precioFormateado} UF</strong>
              </div>
              <div className="col-6 col-md-3 text-center border-end">
                <span className="text-muted small d-block">Ubicación</span>
                <strong className="text-dark fs-6">{propiedad.comuna}</strong>
              </div>
              <div className="col-6 col-md-3 text-center border-end">
                <span className="text-muted small d-block">Distribución</span>
                <strong className="text-dark fs-6">{propiedad.habitaciones} Dorm. / {propiedad.banos} Baños</strong>
              </div>
              <div className="col-6 col-md-3 text-center">
                <span className="text-muted small d-block">Superficie</span>
                <strong className="text-dark fs-6">{propiedad.superficie} m² Totales</strong>
              </div>
            </div>

            {/* Descripción Extendida */}
            <h6 className="fw-bold text-secondary mb-2">
              <i className="bi bi-info-circle-fill me-2"></i>Descripción de la Propiedad
            </h6>
            <p className="text-muted lh-base">
              {propiedad.descripcion}
            </p>
          </div>

          {/* Pie del Modal */}
          <div className="modal-footer bg-light">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <a href="#contacto-seccion" className="btn btn-coral fw-bold" data-bs-dismiss="modal">
              <i className="bi bi-chat-dots-fill me-2"></i>Contactar Asesor
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PropertyModal;