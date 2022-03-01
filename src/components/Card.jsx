export function Card({ title, color, children }) {
  return (
    <article className="card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
