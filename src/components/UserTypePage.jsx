import Header from "../components/Header";
import Stepper from "../components/Stepper";
import UserTypeSelector from "../components/UserTypeSelector";

export default function UserTypePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />

      <main className="max-w-[1360px] mx-auto px-6">
        <Stepper currentStep={1} />

        <header className="text-center mt-10">
          <h1 className="text-[40px] font-bold text-[#141938]">
            Rocío ¿Para quién deseas cotizar?
          </h1>
          <p className="text-[16px] text-[#141938] mt-2">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </header>

        <UserTypeSelector />
      </main>
    </div>
  );
}
