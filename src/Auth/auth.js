import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  
  return (
    <AuthContext.Provider value={{ userName }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}