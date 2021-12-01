import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { fetchUser } from "store/actions";
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

export const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { token, error } = useAppSelector((state) => state.appReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(fetchUser(data));
    setLoading(!loading);
  };

  useEffect(() => {
    if (error) {
      setLoading(!loading);
    }
  }, [error]);

  if (token) {
    return <Navigate to="/users" />;
  }

  return (
    <FormGroup>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", {
            required: "required",
            minLength: {
              value: 3,
              message: "Nombre de usuario demasiado corto",
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
              message: "La contraseña debe tener por lo menos 6 caracteres",
            },
          })}
          autoComplete="on"
          placeholder="Contraseña"
          type="password"
        />
        {errors.password && <Span role="alert">{errors.password.message}</Span>}
        <InputButton type="submit" value="Iniciar Sesión" disabled={loading} />
        {error && <Span role="alert">{error}</Span>}
      </Form>
    </FormGroup>
  );
};

const FormGroup = styled.div`
  width: 500px;
  margin: 1rem auto;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const Span = styled.span`
  font-size: 0.8rem;
  text-align: left;
  padding: 0.2rem;
  color: red;
`;

const Input = styled.input`
  padding: 1rem;
  margin: 0.25rem;
  font-size: 1rem;
  color: tomato;
  outline: none;
`;

const InputButton = styled.input`
  padding: 0.5rem;
  margin: 0 0.2rem;
  outline: none;
  width: auto;
  border: 2px solid tomato;
  text-decoration: none;
  cursor: pointer;
  background: white;
  font-size: 1.4rem;
  &:hover {
    box-shadow: 4px 4px tomato;
  }
`;
