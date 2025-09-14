import PlanCard from './PlanCard';

function PlansList({ plans, onSelect }) {
  if (!plans || !plans.length) return <p>No hay planes disponibles.</p>;

  return (
    <section className="plans">
      <h2 className="plans__title">Nuestros Planes</h2>
      <div className="plans__grid">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default PlansList;
