import "../styles/Stepper.scss";
import React from "react";

const Stepper = ({ currentStep, onBack }) => {
  return (
    <>
      {/* Stepper versión Web */}
      <div className="stepper stepper--web">
        <div className={`stepper__step ${currentStep === 1 ? "active" : ""}`}>
          <div className="stepper__circle">1</div>
          <span className="stepper__label">Planes y coberturas</span>
        </div>

        <div className="stepper__dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`stepper__step ${currentStep === 2 ? "active" : ""}`}>
          <div className="stepper__circle">2</div>
          <span className="stepper__label">Resumen</span>
        </div>
      </div>

      {/* Stepper versión Mobile */}
      <div className="stepper stepper--mobile">
        {currentStep === 2 && (
          <button className="stepper-mobile__back" onClick={onBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_24023_236)">
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="#A9AFD9"
                  stroke-width="2"
                />
                <path
                  d="M12.9715 15.9037L9.06396 11.9999L12.9715 8.09619L14.029 9.15369L11.1865 11.9999L14.029 14.8462L12.9715 15.9037Z"
                  fill="#A9AFD9"
                />
              </g>
              <defs>
                <clipPath id="clip0_24023_236">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        )}

        <span className="stepper-mobile__text">PASO {currentStep} DE 2</span>

        <div className="stepper-mobile__progress">
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
