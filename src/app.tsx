import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/404"));

export function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
