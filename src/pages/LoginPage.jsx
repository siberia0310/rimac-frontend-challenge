import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.scss";
import { validateLoginForm } from "../utils/validateLoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginPage() {
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState("DNI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(true);
  const [acceptComms, setAcceptComms] = useState(true);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateLoginForm({
      documentType,
      documentNumber,
      phoneNumber,
      acceptPolicy,
      acceptComms,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userData = {
      documentType,
      documentNumber,
      phoneNumber,
    };

    localStorage.setItem("userLoginData", JSON.stringify(userData));
    navigate("/plans");
  };

  return (
    <>
      <Header />
      <div className="login-layout">
        <div className="login-layout__col login-layout__col--left">
          <img
            src="/SvgFamily.png"
            alt="Imagen familiar"
            className="login__image"
          />
        </div>

        <div className="login-layout__col login-layout__col--right">
          <div className="login-page">
            <main className="login-page__main">
              <div className="login-page__content">
                <div className="login-page__info">
                  <p className="login-page__badge">Seguro Salud Flexible</p>
                  <h1 className="login-page__title">
                    Creado para ti y tu familia
                  </h1>

                  <p className="login-page__subtitle">
                    Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                    nuestra asesoría. 100% online.
                  </p>
                </div>
                <form className="login-form" onSubmit={handleSubmit} noValidate>
                  <div>
                    <div className="input-group">
                      <select
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                      >
                        <option value="DNI">DNI</option>
                        <option value="CE">CE</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Nro. de documento"
                        value={documentNumber}
                        onChange={(e) => setDocumentNumber(e.target.value)}
                      />
                    </div>
                    {errors.documentNumber && (
                      <p className="error">{errors.documentNumber}</p>
                    )}

                    <input
                      type="tel"
                      placeholder="Celular"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {errors.phoneNumber && (
                      <p className="error">{errors.phoneNumber}</p>
                    )}
                  </div>
                  <div className="checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        checked={acceptPolicy}
                        onChange={(e) => setAcceptPolicy(e.target.checked)}
                      />
                      Acepto la Política de Privacidad
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={acceptComms}
                        onChange={(e) => setAcceptComms(e.target.checked)}
                      />
                      Acepto la Política de Comunicaciones Comerciales
                    </label>
                    {errors.terms && <p className="error">{errors.terms}</p>}

                    <a href="#" className="terms-link">
                      Aplican Términos y Condiciones.
                    </a>
                  </div>

                  <button type="submit" className="btn-submit">
                    Cotiza aquí
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
