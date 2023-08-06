import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/Login";
import { AuthStatus, State } from "../store/store.types";
import Loading from "../componentes/Loading";
import Play from "../pages/Play";
import Win from "../pages/Win";

export const AppRouter = () => {
  const { status } = useSelector((state: State) => state.auth);
  return (
    <Routes>
      {status === AuthStatus.NotAuthenticated && (
        <Route path="/*" element={<Login />} />
      )}
      {status === AuthStatus.Checking && (
        <Route path="/*" element={<Loading />} />
      )}
      {status === AuthStatus.Authenticated && (
        <>
          <Route path="/win" element={<Win />} />
          <Route path="/*" element={<Play />} />
        </>
      )}
    </Routes>
  );
};
