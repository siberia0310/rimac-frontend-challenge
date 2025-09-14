import { useEffect, useState } from 'react';
import { getUser, getPlans } from './services/api';
import UserCard from './components/UserCard';
import PlansList from './components/PlansList';
import Summary from './components/Summary';
import './styles/global.scss';

function App() {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectionType, setSelectionType] = useState(null); 
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      const plansData = await getPlans();
      setUser(userData);
      setPlans(plansData);
    };

    fetchData();
  }, []);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowSummary(true); 
    console.log('🟢 Plan seleccionado:', plan);
  };

  return (
    <main className="container">
      <header className="header">
        <h1 className="header__title">RIMAC Seguros</h1>
      </header>

      {/* Si NO estamos en el resumen */}
      {!showSummary && (
        <>
          {/* Botones de selección siempre visibles */}
          <section className="selection">
            <h2>¿Para quién será el seguro?</h2>
            <div className="selection__buttons">
              <button
                onClick={() => setSelectionType('me')}
                className={selectionType === 'me' ? 'active' : ''}
              >
                Para mí
              </button>
              <button
                onClick={() => setSelectionType('someone')}
                className={selectionType === 'someone' ? 'active' : ''}
              >
                Para alguien más
              </button>
            </div>
          </section>

          {/* Mostrar planes solo si ya eligió tipo */}
          {selectionType && (
            <>
              <UserCard user={user} />
              <PlansList plans={plans} onSelect={handleSelectPlan} />
            </>
          )}
        </>
      )}

      {/* Si estamos en el resumen */}
      {showSummary && (
        <Summary
          user={user}
          selectedPlan={selectedPlan}
          onBack={() => setShowSummary(false)} 
        />
      )}
    </main>
  );
}

export default App;
