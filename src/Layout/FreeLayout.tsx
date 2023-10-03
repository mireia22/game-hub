import { Navigate, useOutlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { useAuthContext } from "../Context/AuthContext";

export const NavBar = () => {
  const { user } = useAuthContext();
  const outlet = useOutlet();

  if (user) return <Navigate to="/dashboard/home" replace />;

  return (
    <>
      <AppBar pages={[{ label: "Login", path: "/login" }]} />
      {outlet}
    </>
  );
};
