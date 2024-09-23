import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handelAuthStateChanged } from "./store/actions/userActions";
import RequireAuth from "./Required/RequireAuth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handelAuthStateChanged());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
