export function Loading({ onClick, term }) {
  const handleClick = () => {
    onClick(term);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          display: "block",
          margin: " 50px auto ",
          fontSize: "18px",
          border: "none",
          padding: "5px 10px",
          backgroundColor: "#00cfc5",
          color: "#f5f5f5",
          fontWeight: "700",
        }}
      >
        loading more
      </button>
    </div>
  );
}
