// src/contexts/auth/authContext.tsx
import React, { createContext, useState, useCallback } from "react";
import {
  CreateUserRequest,
  LoginRequest,
  User,
} from "../../api/services/user/types";
import { userService } from "../../api/services/user/service";

export interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (credentials: LoginRequest) => Promise<void>;
  signUp: (data: CreateUserRequest) => Promise<void>;
  signOut: () => void;
  updateUser: (user: User) => void;
}

const initialContext: AuthContextData = {
  user: null,
  isAuthenticated: false,
  signIn: async () => {
    throw new Error("signIn not implemented");
  },
  signUp: async () => {
    throw new Error("signUp not implemented");
  },
  signOut: () => {
    throw new Error("signOut not implemented");
  },
  updateUser: () => {
    throw new Error("updateUser not implemented");
  },
};

export const AuthContext = createContext<AuthContextData>(initialContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("@App:user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const signIn = useCallback(async (credentials: LoginRequest) => {
    const response = await userService.login(credentials);

    if (!response.token) {
      throw new Error("Invalid response from server");
    }

    localStorage.setItem("@App:token", response.token);

    try {
      const userData = await userService.getByEmail(credentials.email);

      if (!userData) {
        throw new Error("Invalid user data response");
      }
      setUser(userData);
      localStorage.setItem("@App:user", JSON.stringify(userData));
    } catch (e) {
      localStorage.removeItem("@App:token");
      if (e instanceof Error) {
        throw new Error(`Authentication failed: ${e.message}`);
      }
      throw new Error("Authentication failed");
    }
  }, []);

  const signUp = useCallback(
    async (data: CreateUserRequest) => {
      await userService.create(data);
      await signIn({ email: data.email, password: data.password });
    },
    [signIn]
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("@App:token");
    localStorage.removeItem("@App:user");
    setUser(null);
  }, []);

  const updateUser = useCallback((userData: User) => {
    setUser(userData);
    localStorage.setItem("@App:user", JSON.stringify(userData));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};