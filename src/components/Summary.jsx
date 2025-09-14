function Summary({ user, selectedPlan, onBack }) {
    if (!user || !selectedPlan) return null;
  
    return (
      <section className="summary">
        <button className="summary__back" onClick={onBack}>
          ← Volver
        </button>
  
        <h2 className="summary__title">Resumen del seguro</h2>
  
        <div className="summary__card">
          <p><strong>Precios calculados para:</strong></p>
          <h3>{user.name} {user.lastName}</h3>
  
          <p><strong>Responsable de pago</strong></p>
          <p>DNI: 444888888</p>
          <p>Celular: 5130216147</p>
  
          <p><strong>Plan elegido</strong></p>
          <p>{selectedPlan.name}</p>
          <p>Costo del Plan: ${selectedPlan.price} al mes</p>
        </div>
      </section>
    );
  }
  
  export default Summary;
  