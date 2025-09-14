import { useEffect, useState } from "react";
import { getUser, getPlans } from "./services/api";

function App() {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      const plansData = await getPlans();
      setUser(userData);
      setPlans(plansData);
      console.log("✅ Usuario:", userData);
      console.log("✅ Planes:", plansData);
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Reto Frontend RIMAC</h1>

      {user && (
        <section>
          <h2>Usuario:</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </section>
      )}

      {plans && (
        <section>
          <h2>Planes:</h2>
          <pre>{JSON.stringify(plans, null, 2)}</pre>
        </section>
      )}
    </main>
  );
}

export default App;
