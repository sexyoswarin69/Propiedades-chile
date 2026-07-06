import React, { useState } from 'react';

function AdvisorForm() {
  // Estados para manejar el formulario y los mensajes de feedback
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });
  const [status, setStatus] = useState({ error: false, success: false, mensaje: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que recargue la página

    // Validaciones manuales en React (Puntos en Interactividad)
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      setStatus({
        error: true,
        success: false,
        mensaje: 'Por favor, completa todos los campos obligatorios (*).'
      });
      return;
    }

    // Validación simple de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setStatus({
        error: true,
        success: false,
        mensaje: 'Por favor, ingresa un correo electrónico válido.'
      });
      return;
    }

    // Si pasa las validaciones, simulamos el envío exitoso
    setStatus({
      error: false,
      success: true,
      mensaje: `¡Muchas gracias, ${formData.nombre}! Tu solicitud ha sido enviada con éxito. Un asesor te contactará a la brevedad.`
    });

    // Limpiamos los campos
    setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
  };

  return (
    <section className="bg-light py-5" id="contacto-seccion">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="card shadow border-0 p-4 p-md-5 rounded-3 bg-white">
              
              <div className="text-center mb-4">
                <h3 className="fw-bold text-dark">Contactar con un Asesor</h3>
                <p className="text-muted">¿Te interesó alguna propiedad? Déjanos tus datos y resolvemos tus dudas.</p>
              </div>

              {/* Alertas de Feedback dinámicas */}
              {status.error && (
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  <div>{status.mensaje}</div>
                </div>
              )}

              {status.success && (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  <div>{status.mensaje}</div>
                </div>
              )}

              {/* Formulario */}
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label fw-semibold small text-secondary">Nombre Completo *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Willy Rex" 
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="correo" className="form-label fw-semibold small text-secondary">Correo Electrónico *</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="correo" 
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="planetavegueta@correo.com" 
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="telefono" className="form-label fw-semibold small text-secondary">Teléfono de Contacto</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="telefono" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej: +56 9 999 9999" 
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="mensaje" className="form-label fw-semibold small text-secondary">Mensaje o Código de la Propiedad *</label>
                  <textarea 
                    className="form-control" 
                    id="mensaje" 
                    name="mensaje"
                    rows="4" 
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos en qué propiedad estás interesado..."
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-coral btn-lg fw-bold shadow-sm">
                    <i className="bi bi-envelope-fill me-2"></i> Enviar Mensaje
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvisorForm;