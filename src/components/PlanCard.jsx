function PlanCard({ plan, onSelect }) {
    return (
      <div className="plan-card">
        <h3 className="plan-card__title">{plan.name}</h3>
        <p className="plan-card__price">${plan.price} / mes</p>
        <ul className="plan-card__features">
          {plan.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={() => onSelect(plan)} className="plan-card__button">
          Seleccionar plan
        </button>
      </div>
    );
  }
  
  export default PlanCard;
  