import * as yup from "yup";

export const registrationFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Обязательное поле")
    .email("Неверный формат Е-mail"),
  password: yup
    .string()
    .required("Обязательное поле")
    .matches(
      /^[\w_]*$/,
      "Можно использовать только буквы, цифры и знак нижнего подчеркивания"
    ),
  againPassword: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
});
