import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthResponse } from "../utils/auth/AuthResponseSanitizer";

interface AuthState {
  user: {
    id: number;
    username: string;
    email: string;
  };
}

const initialAuthStore: AuthState = {
  user: {
    id: 0,
    username: "",
    email: "",
  },
};

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      ...initialAuthStore,
      setAuth: (authResponse: AuthResponse) =>
        set({ user: authResponse.user }),
      clearAuth: () =>
        set({
          ...initialAuthStore,
        }),
    }),
    { name: "auth" }
  )
);

export const updateUser = (authResponse: AuthResponse) =>
  useAuthStore.setState({ user: authResponse.user });

export const deleteUser = () =>
  useAuthStore.setState({ ...initialAuthStore });
