import { Fragment } from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <Fragment>
      <title>Modern React App | Not found</title>
      <section>
        <h5>Not found</h5>
        <p>Sorry, but the page you are looking for is not found</p>
        <Link to="/">Back to the main page</Link>
      </section>
    </Fragment>
  );
}
