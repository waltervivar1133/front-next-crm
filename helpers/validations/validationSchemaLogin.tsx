import * as Yup from "yup";
import { MyFormValuesLogin } from "../../types/MyFormValues";

export const initialValues: MyFormValuesLogin = {
  email: "",
  password: "",
};
export const validationSchema = Yup.object({
  email: Yup.string()
    .email("El email no es valido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es necesaria")
    .min(6, "El password debe ser de al menos 6 caracteres"),
});
