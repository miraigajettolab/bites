import { BrowserRouter, HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Test } from "../../bites/Test/Test";
import { Home } from "../Home/Home";
import { NotFound } from "../NotFound";
import { routes } from "./routes";

export const AppRouter: React.FC = () => {
  const { bites, home, notFound } = routes;

  return (
    <HashRouter>
      <Routes>
        <Route path={home()} element={<Home />} />

        <Route path={bites.test()} element={<Test />} />

        <Route path="/" element={<Navigate to={home()} />} />
        <Route path="*" element={<Navigate to={notFound()} />} />
        <Route path={notFound()} element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};
