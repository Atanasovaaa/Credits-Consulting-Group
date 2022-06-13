import { Route, Routes } from "react-router";
import "./App.css";
import { Login } from "./components/auth/login/Login";
import { Register } from "./components/auth/register/Register";
import { Layout } from "./components/layout/Layout";
import { AuthenticatedRoute } from "./utils/guards/AuthenticatedRoute";
import { NonAuthenticatedRoute } from "./utils/guards/NonAuthenticatedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/register" element={
          <NonAuthenticatedRoute>
            <Register/>
          </NonAuthenticatedRoute>
        } />
        <Route exact path="/login" element={
          <NonAuthenticatedRoute>
            <Login/>
          </NonAuthenticatedRoute>
        } />
        <Route exact path="/*" element={
          <AuthenticatedRoute>
            <Layout/>
          </AuthenticatedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
