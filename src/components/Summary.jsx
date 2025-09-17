import BackButton from "./BackButton";
import "../styles/Summary.scss";

function Summary({ user, selectedPlan, onBack }) {
  if (!user || !selectedPlan) return null;

  return (
    <section className="summary">
      <BackButton onClick={onBack} />

      <h2 className="summary__title">Resumen del seguro</h2>

      <div className="summary__card">
        {/* Asegurado */}
        <div className="summary__section">
          <span className="summary__label">Precios calculados para:</span>
          <div className="summary__user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#141938"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
            {user.name} {user.lastName}
          </div>
        </div>

        <hr className="summary__divider" />

        {/* Responsable de pago */}
        <div className="summary__section">
          <span className="summary__subtitle">Responsable de pago</span>
          <p className="summary__text">
            {user.documentType}: {user.documentNumber}
          </p>
          <p className="summary__text">Celular: {user.phoneNumber}</p>
        </div>

        <hr className="summary__divider" />

        {/* Plan elegido */}
        <div className="summary__section">
          <span className="summary__subtitle">Plan elegido</span>
          <p className="summary__text">{selectedPlan.name}</p>
          <p className="summary__text">
            Costo del Plan: S/ {selectedPlan.price} al mes
          </p>
        </div>
      </div>
    </section>
  );
}

export default Summary;
