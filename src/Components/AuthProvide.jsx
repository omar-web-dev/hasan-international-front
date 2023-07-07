import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

const AuthProvide = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const token = localStorage.getItem("token");
  
  const decodeToken = (token) => {
    try {
        const decoded = jwt_decode(token);
        setUser(decoded);
    } catch (error) {
        console.error("Error decoding token:", error);
    }
};

  // Call the decode function when the component mounts
  useEffect(() => {
    decodeToken(token);
  }, [token]);

  console.log(user)


  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvide;
