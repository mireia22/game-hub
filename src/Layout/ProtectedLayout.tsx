import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { layoutPages } from "../MainComponents/Constants/layoutPages";
import { useNavigate } from "react-router-dom";
import Button from "../MainComponents/Button/Button";

export const ProtectedNavLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  if (!user) return <Navigate to="/" />;

  const handleNavigate = (path: string) => {
    if (path) navigate(path);
  };

  return (
    <nav>
      {layoutPages?.map((page) => (
        <a key={page.label} onClick={() => handleNavigate(page.path)}>
          {page.label}
        </a>
      ))}
      {!!user && (
        <Button variant="log" onClick={logout}>
          Logout
        </Button>
      )}
    </nav>
  );
};
