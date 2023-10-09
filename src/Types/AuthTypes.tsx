import { ReactNode } from "react";

//useAuthContext
export type UserData = {
  username: string;
  password: string;
};

export type AuthContextType = {
  user: UserData | null;
  login: (data: UserData) => Promise<void>;
  logout: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};

//useLocalStorage
export type LocalStorageKey = string;
export type LocalStorageValue = UserData | null;

export type UseLocalStorageReturnType = [
  LocalStorageValue,
  (value: LocalStorageValue) => void
];
