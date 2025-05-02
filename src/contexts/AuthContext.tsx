import { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  username: string;
  fullName: string;
  role: 'user' | 'admin';
  department: string;
  profileImage?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    const { login}  = await import('../services/authService');
    const result = await login(username, password);
    setUser(result as User);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
