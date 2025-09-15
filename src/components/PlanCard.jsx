import React from "react";

function PlanCard({ plan, onSelect }) {
  const handleCardClick = () => onSelect(plan);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div
      className="plan-card"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      <div className="plan-card__content">
        <div className="plan-card__info">
          <h3 className="plan-card__title">{plan.name}</h3>
          <div className="infoprice">
            <p className="plan-card__label">COSTO DEL PLAN</p>
            <p className="plan-card__price">S/ {plan.price} al mes</p>
          </div>
          <hr className="plan-card__divider" />
        </div>

        <ul className="plan-card__description">
          {plan.description.map((item, idx) => (
            <li key={`${plan.name}-desc-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>

      <button
        className="plan-card__button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(plan);
        }}
      >
        Seleccionar Plan
      </button>
    </div>
  );
}

export default React.memo(PlanCard);
