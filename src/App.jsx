import { Route, Routes } from "react-router";
import "./App.css";
import { Login } from "./components/auth/login/Login";
import { Register } from "./components/auth/register/Register";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/*" element={<Layout/>} />
      </Routes>
    </div>
  );
}

export default App;
