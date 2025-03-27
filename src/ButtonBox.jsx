export default function ButtonBox({ children }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(255, 210, 112)",
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        width: "200px",
        border: "2px solid black",
      }}
    >
      {children}
    </div>
  );
}
