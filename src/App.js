import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

function App() {
  const [user, setUser] = useState({});
  const contextValue = { user, setUser };

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={< />} />
        <Route path="/nova-saida" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
