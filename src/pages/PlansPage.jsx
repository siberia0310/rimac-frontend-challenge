import { useState, useEffect } from "react";
import Header from "../components/Header";
import Stepper from "../components/Stepper";
import UserTypeSelector from "../components/UserTypeSelector";
import PlansList from "../components/PlansList";
import Summary from "../components/Summary";
import { getUser, getPlans } from "../services/api";

function PlansPage() {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);
  const [selectionType, setSelectionType] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        const planData = await getPlans();

        if (!userData || !planData) {
          throw new Error("Data structure invalid");
        }

        setUser(userData);
        setPlans(planData);
        setHasError(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setHasError(true);
      }
    };

    fetchData();
  }, []);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBackToPlans = () => {
    setSelectedPlan(null);
  };

  if (hasError) {
    return (
      <main className="plans-container">
        <Header />
        <div className="text-center mt-10 text-red-600">
          <p>
            Ocurrió un error al cargar los datos. Por favor, inténtalo más
            tarde.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="plans-container">
      <Header />
      <Stepper currentStep={selectedPlan ? 2 : 1} onBack={handleBackToPlans} />

      {!selectedPlan && user && (
        <>
          <UserTypeSelector
            userName={user.name}
            selectionType={selectionType}
            setSelectionType={setSelectionType}
          />

          {selectionType &&
            (plans.length > 0 ? (
              <PlansList plans={plans} onSelect={handlePlanSelect} />
            ) : (
              <p className="text-center mt-6 text-gray-600">
                No hay planes disponibles.
              </p>
            ))}
        </>
      )}

      {selectedPlan && user && (
        <Summary
          user={user}
          selectedPlan={selectedPlan}
          onBack={handleBackToPlans}
        />
      )}
    </main>
  );
}

export default PlansPage;
