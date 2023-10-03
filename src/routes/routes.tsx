import Main from "../pages/main";
import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path='/main'
          element={
            <Main />
          } />
        <Route
          path='*'
          element={
            <Navigate
              to="/main"
            />
          }
        >
        </Route>
      </Routes>
    </>
  );
}