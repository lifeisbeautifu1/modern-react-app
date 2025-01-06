import { Link } from "react-router";

export default function Home() {
  return (
    <section>
      <h1>Hello world!</h1>
      <p>This is a website on the internet</p>
      <Link to="/about">Go to the next page</Link>
    </section>
  );
}
