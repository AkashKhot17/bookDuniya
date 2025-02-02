import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext();

function Authprovider({children}) {
    const initaiUser=localStorage.getItem("User");

  const [authUser,setAuthUser]=useState(initaiUser?JSON.parse(initaiUser):undefined);

  return (
     <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
     </AuthContext.Provider>
      )
}

export const useAuth=()=>useContext(AuthContext);
export default Authprovider;
