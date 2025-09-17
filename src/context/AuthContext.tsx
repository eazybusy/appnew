import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getUserName, saveUserName as saveUser, clearUserData } from '../services/storage';

interface AuthContextType {
  userName: string | null;
  isLoading: boolean;
  signIn: (name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const storedName = await getUserName();
        if (storedName) {
          setUserName(storedName);
        }
      } catch (e) {
        console.error("Failed to load user name.", e);
      } finally {
        setIsLoading(false);
      }
    };
    bootstrapAsync();
  }, []);

  const signIn = async (name: string) => {
    await saveUser(name);
    setUserName(name);
  };

  const signOut = async () => {
    await clearUserData();
    setUserName(null);
  };

  // 1. ამოვიღეთ ActivityIndicator. კონტექსტმა მხოლოდ მონაცემები უნდა მართოს.
  // ჩატვირთვის ვიზუალურ მხარეს ჩვენი HomeScreen (Splash) უზრუნველყოფს.
  return (
    <AuthContext.Provider value={{ userName, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};