import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import { Layout } from "@/components";

const Home = lazy(() => import("@/pages/home"));
const NotFound = lazy(() => import("@/pages/404"));
const ErrorPage = lazy(() => import("@/pages/error"));

export function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
