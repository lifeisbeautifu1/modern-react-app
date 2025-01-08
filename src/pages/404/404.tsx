import { Fragment } from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <Fragment>
      <title>Website | Not found</title>
      <section>
        <h1>Not found</h1>
        <p>Sorry, but the page you are looking for is not found</p>
        <Link to="/">Back to the main page</Link>
      </section>
    </Fragment>
  );
}
