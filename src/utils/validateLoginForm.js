export const validateLoginForm = ({
  documentNumber,
  phoneNumber,
  acceptPolicy,
  acceptComms,
}) => {
  const errors = {};

  if (!documentNumber || documentNumber.length < 8) {
    errors.documentNumber =
      "Ingresa un número de documento válido (mínimo 8 dígitos)";
  }

  if (!phoneNumber || phoneNumber.length < 9) {
    errors.phoneNumber = "Ingresa un número de celular válido (9 dígitos)";
  }

  if (!acceptPolicy || !acceptComms) {
    errors.terms = "Debes aceptar ambas políticas";
  }

  return errors;
};
