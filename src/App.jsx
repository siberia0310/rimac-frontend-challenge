import { useEffect, useState } from 'react';
import { getUser, getPlans } from './services/api';
import UserCard from './components/UserCard';
import PlansList from './components/PlansList';
import './styles/global.scss';

function App() {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectionType, setSelectionType] = useState(null); 

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
    console.log('🟢 Plan seleccionado:', plan);
  };

  const handleSelectType = (type) => {
    setSelectionType(type);
    console.log('👤 Tipo seleccionado:', type);
  };

  return (
    <main className="container">
      <header className="header">
        <h1 className="header__title">RIMAC Seguros</h1>
      </header>

      {/* Selector siempre visible */}
      <section className="selection">
        <h2>¿Para quién será el seguro?</h2>
        <div className="selection__buttons">
          <button
            onClick={() => handleSelectType('me')}
            className={selectionType === 'me' ? 'active' : ''}
          >
            Para mí
          </button>
          <button
            onClick={() => handleSelectType('someone')}
            className={selectionType === 'someone' ? 'active' : ''}
          >
            Para alguien más
          </button>
        </div>
      </section>

      {/* Mostrar planes solo si ya se eligió un tipo */}
      {selectionType && (
        <>
          <p className="selection__type">
            Has elegido: {selectionType === 'me' ? 'Para mí' : 'Para alguien más'}
          </p>

          <UserCard user={user} />
          <PlansList plans={plans} onSelect={handleSelectPlan} />
        </>
      )}

      {selectedPlan && (
        <section className="selected-plan">
          <h3>Plan seleccionado:</h3>
          <pre>{JSON.stringify(selectedPlan, null, 2)}</pre>
        </section>
      )}
    </main>
  );
}

export default App;
