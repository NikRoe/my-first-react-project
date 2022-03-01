import "./App.css";
import { Card } from "./Card";

export function App() {
  return (
    <>
      {/* first Card: */}
      <Card title="Declarative" color="hotpink">
        <strong>React</strong> makes it painless to create interactive UIs.
        Design simple views for each state in your application, and{" "}
        <strong>React</strong> will efficiently update and render just the right
        components when your data changes.
      </Card>
      {/* second Card: */}
      <Card title="Component-Based" color="#faffab">
        Build encapsulated components that manage their own state, then compose
        them to make complex UIs.
      </Card>
      {/* third Card: */}
      <Card
        title="Learn Once, Write Anywhere"
        color="hsl(241deg 19% 75% / 75%)"
      >
        We don’t make assumptions about the rest of your technology stack, so
        you can develop new features in <strong>React</strong> without rewriting
        existing code.
      </Card>
    </>
  );
}
