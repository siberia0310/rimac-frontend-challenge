import UserTypeCard from "./UserTypeCard";
import "../styles/UserTypeSelector.scss";
import React from "react";

function UserTypeSelector({ userName, selectionType, setSelectionType }) {
  return (
    <section className="user-type-selector">
      <div className="user-type-selector__welcome">
        <h1 className="user-type-selector__title">
          {userName}, ¿Para quién deseas cotizar?
        </h1>
        <p className="user-type-selector__subtitle">
          Selecciona la opción que se ajuste más a tus necesidades.
        </p>
      </div>

      <div className="user-type-selector__cards">
        <UserTypeCard
          title="Para mí"
          description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          selected={selectionType === "me"}
          onClick={() => setSelectionType("me")}
        />
        <UserTypeCard
          title="Para alguien más"
          description="Realiza una cotización para uno de tus familiares o cualquier persona."
          selected={selectionType === "someone"}
          onClick={() => setSelectionType("someone")}
        />
      </div>
    </section>
  );
}

export default React.memo(UserTypeSelector)
