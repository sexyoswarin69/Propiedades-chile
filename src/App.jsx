import React, { useState } from 'react';
import { propiedadesIniciales } from './mockData';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import PropertyGrid from './components/PropertyGrid';
import PropertyModal from './components/PropertyModal';
import FinancingAccordion from './components/FinancingAccordion';
import AdvisorForm from './components/AdvisorForm'; // <-- Importar Formulario
import Footer from './components/Footer';          // <-- Importar Footer

function App() {
  const [propiedades] = useState(propiedadesIniciales);
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(null);
  const [filtros, setFiltros] = useState({
    busqueda: '',
    tipo: '',
    precioMax: ''
  });

  // Lógica de filtrado dinámico
  const propiedadesFiltradas = propiedades.filter((prop) => {
    const coincideBusqueda = prop.titulo.toLowerCase().includes(filtros.busqueda.toLowerCase()) || 
                             prop.comuna.toLowerCase().includes(filtros.busqueda.toLowerCase());
    const coincideTipo = filtros.tipo === '' || prop.tipo === filtros.tipo;
    const coincidePrecio = filtros.precioMax === '' || prop.precio <= parseInt(filtros.precioMax);

    return coincideBusqueda && coincideTipo && coincidePrecio;
  });

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* 1. Navbar Responsivo con Buscador */}
      <Navbar filtros={filtros} setFiltros={setFiltros} />

      {/* 2. Hero Section con CTA */}
      <section className="bg-dark text-white py-5 text-center position-relative" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-warning mb-3">Encuentra tu próximo hogar en Chile</h1>
          <p className="lead fs-4 mb-4 text-light">Descubre las mejores casas y departamentos disponibles en el mercado.</p>
          <a href="#propiedades-seccion" className="btn btn-warning btn-lg px-4 fw-bold shadow-sm">
            <i className="bi bi-house-fill me-2"></i> Ver Propiedades
          </a>
        </div>
      </section>

      {/* 3. Contenedor Principal: Filtros y Grilla de Tarjetas */}
      <main className="container my-5" id="propiedades-seccion">
        <Filters filtros={filtros} setFiltros={setFiltros} />

        <div className="alert alert-secondary border-0 shadow-sm mb-4">
          Mostrando <strong>{propiedadesFiltradas.length}</strong> de <strong>{propiedades.length}</strong> inmuebles disponibles.
        </div>

        <PropertyGrid 
          propiedades={propiedadesFiltradas} 
          setPropiedadSeleccionada={setPropiedadSeleccionada}
        />
      </main>

      {/* 4. Sección de Financiamiento (Acordeón) */}
      <FinancingAccordion />

      {/* 5. Sección de Contacto (Formulario Validado) */}
      <AdvisorForm />

      {/* 6. Footer de la Aplicación */}
      <Footer />

      {/* 7. Modal dinámico (Oculto por defecto en el DOM) */}
      <PropertyModal propiedad={propiedadSeleccionada} />
    </div>
  );
}

export default App;