import "../styles/Stepper.scss";
import React from "react";

const Stepper = ({ currentStep, onBack }) => {
  const validStep = currentStep === 1 || currentStep === 2;

  if (!validStep) return null;

  return (
    <>
      {/* Stepper versión Web */}
      <nav className="stepper stepper--web" aria-label="Paso de compra">
        <div className={`stepper__step ${currentStep === 1 ? "active" : ""}`}>
          <div className="stepper__circle">1</div>
          <span className="stepper__label">Planes y coberturas</span>
        </div>

        <div className="stepper__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`stepper__step ${currentStep === 2 ? "active" : ""}`}>
          <div className="stepper__circle">2</div>
          <span className="stepper__label">Resumen</span>
        </div>
      </nav>

      {/* Stepper versión Mobile */}
      <div className="stepper stepper--mobile">
        {currentStep === 2 && (
          <button
            className="stepper-mobile__back"
            onClick={onBack}
            aria-label="Volver al paso anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="11" stroke="#A9AFD9" strokeWidth="2" />
              <path
                d="M12.9715 15.9037L9.06396 11.9999L12.9715 8.09619L14.029 9.15369L11.1865 11.9999L14.029 14.8462L12.9715 15.9037Z"
                fill="#A9AFD9"
              />
            </svg>
          </button>
        )}

        <span className="stepper-mobile__text">PASO {currentStep} DE 2</span>

        <div
          className="stepper-mobile__progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={2}
          aria-valuenow={currentStep}
        >
          <div
            className="stepper-mobile__bar"
            style={{ width: `${(currentStep / 2) * 100}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default Stepper;
