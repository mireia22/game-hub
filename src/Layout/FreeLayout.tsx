import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from "../Hooks/Context/useAuthContext";

export const FreeNavLayout = () => {
  const { user } = useAuthContext();
  const outlet = useOutlet();

  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <>
      <nav pages={[{ label: "Login", path: "/login" }]} />
      {outlet}
    </>
  );
};
