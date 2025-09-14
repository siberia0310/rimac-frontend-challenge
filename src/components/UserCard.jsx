function UserCard({ user }) {
    if (!user) return null;
  
    return (
      <section className="user-card">
        <h2 className="user-card__title">Bienvenido, {user.name} {user.lastName}</h2>
        <p className="user-card__info">
          Fecha de nacimiento: {user.birthDay}
        </p>
      </section>
    );
  }
  
  export default UserCard;
  