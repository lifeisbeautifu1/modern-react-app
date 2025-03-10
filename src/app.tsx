import { Fragment, Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
// import { Layout } from "@/components";

const Home = lazy(() => import("@/pages/home"));
const NotFound = lazy(() => import("@/pages/404"));

const Test = () => {
  return (
    <Fragment>
      <button>Native button</button>
      <p style={{ fontSize: "16px" }}>Some text here</p>
      <p style={{ fontSize: "1rem" }}>Some text here</p>
      <p style={{ fontSize: "1em" }}>Some text here</p>
    </Fragment>
  );
};

export function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
