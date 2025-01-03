import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previous) => previous + 1);
  };

  return (
    <section>
      <h1>Hello world!</h1>
      <p>This is a website on the internet</p>
      <button type="button" onClick={increment}>
        Count is {count}
      </button>
    </section>
  );
}
