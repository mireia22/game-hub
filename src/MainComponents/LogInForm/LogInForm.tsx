import { useForm } from "react-hook-form";
import { useAuthContext } from "../../Context/AuthContext";
import { Form, Label, Input } from "./LoginForm-styles";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type FormData = {
  username: string;
  password: string;
};

function LoginForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
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

      <Button variant="log" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
