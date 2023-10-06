import { useState } from "react";
import {
  LocalStorageKey,
  LocalStorageValue,
  UseLocalStorageReturnType,
} from "../Types/AuthTypes";

export const useLocalStorage = (
  key: LocalStorageKey,
  initialValue: LocalStorageValue
): UseLocalStorageReturnType => {
  const [storedValue, setStoredValue] = useState<LocalStorageValue>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const updateStoredValue = (value: LocalStorageValue) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error("LocalStorage Error", error);
    }
  };

  return [storedValue, updateStoredValue];
};
