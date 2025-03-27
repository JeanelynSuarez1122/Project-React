export default function BoxContainer({ children }) {
    return (
      <div
        style={{
          backgroundColor: "rgb(112, 181, 255)",
          padding: "60px", // Increased padding for a bigger box
          borderRadius: "15px",
          textAlign: "center",
          width: "300px", // Increased width
          height: "auto", // Adjust height dynamically
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    );
  }
  