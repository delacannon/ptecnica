import { useForm } from "react-hook-form";
import { loginAction } from "store/action-creators";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { Navigate } from "react-router-dom";
import type { User } from "api";
import { FormContent, Input, Span, InputButton } from "./styles";

export const Form = () => {
  const dispatch = useAppDispatch();
  const { token, error, loading } = useAppSelector((state) => state.appReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user: User) => dispatch(loginAction(user));

  if (token) {
    return <Navigate to="/users" />;
  }

  return (
    <>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", {
            required: "required",
            minLength: {
              value: 3,
              message: "*Nombre de usuario demasiado corto",
            },
          })}
          autoComplete="on"
          placeholder="Usuario"
        />
        {errors.username && <Span role="alert">{errors.username.message}</Span>}
        <Input
          {...register("password", {
            required: "required",
            minLength: {
              value: 6,
              message: "*La contraseña debe tener por lo menos 6 caracteres",
            },
          })}
          autoComplete="on"
          placeholder="Contraseña"
          type="password"
        />
        {errors.password && <Span role="alert">{errors.password.message}</Span>}
        <InputButton type="submit" value="Iniciar Sesión" disabled={loading} />
        {error && <Span role="alert">*{error}</Span>}
      </FormContent>
    </>
  );
};
