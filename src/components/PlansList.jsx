import PlanCard from './PlanCard';
import "../styles/PlansList.scss";

function PlansList({ plans, onSelect }) {
  const noPlans = !Array.isArray(plans) || plans.length === 0;

  if (noPlans) {
    return <p>No hay planes disponibles.</p>;
  }

  return (
    <section className="plans">
      <div className="plans__grid">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default PlansList;
