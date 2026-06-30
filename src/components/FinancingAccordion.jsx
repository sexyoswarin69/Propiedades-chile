import React from 'react';

function FinancingAccordion() {
  return (
    <section className="bg-white py-5 border-top border-bottom" id="financiamiento-seccion">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">
            <i className="bi bi-calculator text-primary me-2"></i>
            Opciones de Financiamiento
          </h2>
          <p className="text-muted lead">
            Conoce las alternativas disponibles en Chile para financiar la compra de tu próximo inmueble.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            {/* Contenedor del Acordeón de Bootstrap */}
            <div className="accordion shadow-sm" id="accordionFinanciamiento">
              
              {/* Opción 1: Crédito Hipotecario */}
              <div className="accordion-item border-0 mb-2 rounded shadow-sm">
                <h2 className="accordion-header" id="headingOne">
                  <button 
                    className="accordion-button fw-bold text-dark bg-light" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne" 
                    aria-expanded="true" 
                    aria-controls="collapseOne"
                  >
                    <i className="bi bi-bank text-primary me-2"></i>
                    1. Crédito Hipotecario (Bancos e Instituciones Financieras)
                  </button>
                </h2>
                <div 
                  id="collapseOne" 
                  className="accordion-collapse collapse show" 
                  aria-labelledby="headingOne" 
                  data-bs-parent="#accordionFinanciamiento"
                >
                  <div className="accordion-body text-muted lh-base">
                    Es un préstamo a largo plazo otorgado por un banco o institución financiera para la adquisición de una propiedad. Generalmente financian entre el <strong>80% y el 90%</strong> del valor total de la propiedad en UF. Los plazos de pago suelen ir desde los 15 hasta los 30 años, requiriendo una evaluación comercial previa de tus ingresos y antecedentes comerciales.
                  </div>
                </div>
              </div>

              {/* Opción 2: Subsidios Estatales */}
              <div className="accordion-item border-0 mb-2 rounded shadow-sm">
                <h2 className="accordion-header" id="headingTwo">
                  <button 
                    className="accordion-button collapsed fw-bold text-dark bg-light" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo" 
                    aria-expanded="false" 
                    aria-controls="collapseTwo"
                  >
                    <i className="bi bi-award text-success me-2"></i>
                    2. Subsidios Habitacionales (MINVU)
                  </button>
                </h2>
                <div 
                  id="collapseTwo" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingTwo" 
                  data-bs-parent="#accordionFinanciamiento"
                >
                  <div className="accordion-body text-muted lh-base">
                    El Ministerio de Vivienda y Urbanismo (MINVU) ofrece distintos programas de ayuda estatal para familias de sectores medios y vulnerables. Destaca el <strong>Subsidio DS1</strong>, el cual te permite comprar una vivienda nueva o usada (con límites en el valor máximo de la propiedad) complementando el beneficio con ahorros propios y/o un crédito hipotecario menor.
                  </div>
                </div>
              </div>

              {/* Opción 3: Pago al Contado o Mutuarias */}
              <div className="accordion-item border-0 rounded shadow-sm">
                <h2 className="accordion-header" id="headingThree">
                  <button 
                    className="accordion-button collapsed fw-bold text-dark bg-light" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree" 
                    aria-expanded="false" 
                    aria-controls="collapseThree"
                  >
                    <i className="bi bi-cash-coin text-warning me-2"></i>
                    3. Pago al Contado o Crédito de Mutuarias
                  </button>
                </h2>
                <div 
                  id="collapseThree" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingThree" 
                  data-bs-parent="#accordionFinanciamiento"
                >
                  <div className="accordion-body text-muted lh-base">
                    El <strong>Pago al Contado</strong> consiste en liquidar el valor total de la propiedad en una sola transacción mediante vale vista al momento de firmar la escritura. Por otro lado, las <strong>Mutuarias</strong> (filiales de compañías de seguros) ofrecen créditos hipotecarios que no quedan registrados en el sistema financiero bancario, lo que resulta ideal para mantener la capacidad de endeudamiento libre.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancingAccordion;