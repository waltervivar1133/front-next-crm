import * as Yup from "yup";
import { MyFormValuesRegister } from "../../types/MyFormValues";

export const initialValues: MyFormValuesRegister = {
  name: "",
  surname: "",
  email: "",
  password: "",
};
export const validationSchema = Yup.object({
  name: Yup.string()
    .required("El campo nombre es obligatorio")
    .min(4, "El nombre debe tener minimo 4 caracteres"),
  surname: Yup.string()
    .required("El campo apellido es obligatorio")
    .min(4, "El apellido debe tener minimo 4 caracteres"),
  email: Yup.string()
    .email("El email no es valido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es necesaria")
    .min(6, "El password debe ser de al menos 6 caracteres"),
});
