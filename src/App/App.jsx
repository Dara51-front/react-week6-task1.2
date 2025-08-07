import { useState, useRef, useEffect } from "react";
import AgainPasswordForm from "../AgainPasswordForm/AgainPasswordForm";
import EmailForm from "../EmailForm/EmailForm";
import PasswordForm from "../PasswordForm/PasswordForm";
import styles from "./app.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema } from "../registration-porm-schema.jsx";

export default function App({}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      againPassword: "",
    },
    resolver: yupResolver(registrationFormSchema),
    mode: "onTouched",
  });
  const submitButtonRef = useRef(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.divOfForms}>
        <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
          <EmailForm
            label="Введите email"
            className={styles.form}
            type="text"
            placeholder="E-mail"
            {...register("email")}
            error={errors.email?.message}
          />
          <PasswordForm
            label="Введите пароль:"
            className={styles.form}
            type="text"
            placeholder="Пароль"
            {...register("password")}
            error={errors.password?.message}
          />

          <AgainPasswordForm
            className={styles.form}
            label="Введите пароль еще раз:"
            type="text"
            placeholder="Еще раз пароль"
            {...register("againPassword")}
            error={errors.againPassword?.message}
          />
          <button
            ref={submitButtonRef}
            className={styles.registerButton}
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </>
  );
}
