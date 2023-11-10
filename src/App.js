import { useState } from "react";
import "./App.css";
import UserContext from "./context/UserContext";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/user/dashboard/Dashboard";
import Home from "./components/user/home/Home";
import Account from "./components/account/Account";
import Profile from "./components/user/profile/Profile";
import AdminSignIn from "./components/auth/admin/AdminSignIn";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<AdminSignIn />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
