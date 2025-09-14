import { useEffect, useState } from 'react';
import { getUser, getPlans } from './services/api';
import './styles/global.scss';

function App() {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      const plansData = await getPlans();
      setUser(userData);
      setPlans(plansData);
    };

    fetchData();
  }, []);

  return (
    <main className="container">
      <header className="header">
        <h1 className="header__title">RIMAC Seguros</h1>
      </header>

      <section className="user-info">
        <h2 className="user-info__title">Bienvenido/a, {user?.name}</h2>
      </section>

      <section className="plans">
        <h2 className="plans__title">Nuestros Planes</h2>
        <div className="grid plans-grid">
          {plans.map((plan) => (
            <div key={plan.name} className="plans__card">
              <h3>{plan.name}</h3>
              <p>Precio: ${plan.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
