import "./Counter.css";

export default function Counter({ count }) {
  return (
    <div className="Counter">
      <span>{count}</span>
    </div>
  );
}
