import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthContextType,
  AuthProviderProps,
  UserData,
} from "../../Types/AuthTypes";
import { useLocalStorage } from "../useLocalStorage";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuthContext = () => useContext(AuthContext) as AuthContextType;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data: UserData): Promise<void> => {
    setUser(data);
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
