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

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      const planData = await getPlans();
      setUser(userData);
      setPlans(planData);
    };
    fetchData();
  }, []);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBackToPlans = () => {
    setSelectedPlan(null);
  };

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
          {selectionType && (
            <PlansList plans={plans} onSelect={handlePlanSelect} />
          )}
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
