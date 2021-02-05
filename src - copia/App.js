import React, { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/contexts";
import Routing from "./routes/Routing";
import { isUserLogedApi } from './api/auth';



export default function App() {



  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);
  useEffect(async () => {

    await setUser(isUserLogedApi());
    setLoadUser(true);
    console.log(user)
  }, [refreshCheckLogin])


  return (<AuthContext.Provider value={user} >

    <><Routing setRefreshCheckLogin={setRefreshCheckLogin} /> </>
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      pauseOnHover
      draggable

    />
  </AuthContext.Provider>
  );
}

