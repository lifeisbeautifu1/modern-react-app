import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import { Layout } from "@/components";

const Home = lazy(() => import("@/pages/home"));
const NotFound = lazy(() => import("@/pages/404"));

export function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
