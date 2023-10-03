import { useForm } from "react-hook-form";
import { useAuthContext } from "../Context/AuthContext";
import { Form } from "./LoginForm-styles";
import Button from "../MainComponents/Button/Button";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate("/dashboard/home");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>CLIMBER LOGIN</h2>
      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: true })}
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default LoginForm;
