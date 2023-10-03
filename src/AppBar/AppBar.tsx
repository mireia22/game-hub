import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import Button from "../MainComponents/Button/Button";
import { NavWrp } from "./AppBar-styles";

const AppBar = ({ pages }) => {
  const navigate = useNavigate();

  const { user, logout } = useAuthContext();

  const handleNavigate = (path) => {
    if (path) navigate(path);
  };
  return (
    <NavWrp>
      {pages?.map((page) => (
        <a key={page.label} onClick={() => handleNavigate(page.path)}>
          {page.label}
        </a>
      ))}
      {!!user && (
        <Button key={logout} onClick={logout}>
          Logout
        </Button>
      )}
    </NavWrp>
  );
};

export default AppBar;
