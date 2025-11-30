import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { listenToAuthChanges } from "@/store/slices/authSlice";


export interface AppUser extends User {
  role?: string; // optional role property
}
interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(listenToAuthChanges());
    }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

 
  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      user,
      loading,
    }),
    [user, loading]
  ); // Only recompute when user or loading changes

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};


