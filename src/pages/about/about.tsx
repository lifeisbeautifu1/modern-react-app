import { Fragment } from "react";
import { Link } from "react-router";

export default function About() {
  return (
    <Fragment>
      <title>Website | About</title>
      <section>
        <h1>Welcome to about us page</h1>
        <p>Here is some infortmation about us</p>
        <Link to="/">Back to the main page</Link>
      </section>
    </Fragment>
  );
}
