const BASE_URL = "https://rimac-front-end-challenge.netlify.app/api";

export const getUser = async () => {
  try {
    const res = await fetch(`${BASE_URL}/user.json`);
    if (!res.ok) throw new Error("Error al cargar user.json");
    return await res.json();
  } catch (error) {
    console.error("Error en getUser:", error.message);
    return null;
  }
};

export const getPlans = async () => {
  try {
    const res = await fetch(`${BASE_URL}/plans.json`);
    if (!res.ok) throw new Error('Error al cargar plans.json');
    const data = await res.json();
    return data.list; 
  } catch (error) {
    console.error('Error en getPlans:', error.message);
    return [];
  }
};

