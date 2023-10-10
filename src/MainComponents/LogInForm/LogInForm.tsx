import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Label, Input } from "./LoginForm-styles";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/Context/useAuthContext";
import { UserData } from "../../Types/AuthTypes";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<UserData>();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null
  );

  const onSubmit = async (data: UserData): Promise<void> => {
    try {
      const loginResult = await login(data);
      const errorMessage =
        "Invalid login credentials, Please check your username and password.";

      if (loginResult) {
        navigate("/dashboard");
      } else {
        setLoginErrorMessage(errorMessage);
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>CLIMBER LOGIN</h2>
      <Label>
        Username
        <Input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
      </Label>

      <Label>
        Password
        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
      </Label>

      {loginErrorMessage && (
        <article>
          {loginErrorMessage.split(", ").map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </article>
      )}

      <Button variant="log" type="submit">
        Login
      </Button>
    </Form>
  );
};
export default LoginForm;
