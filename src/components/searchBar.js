import { useState } from "react";
export function SearchBar({ onSubmit }) {
  const [term, SetTerm] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    event.preventDefault();
    SetTerm(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={term}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px auto",
            width: "541px",
            fontSize: "20px",
            fontWeight: "bold",
            background: "black",
            color: "#f6f6f6",
            padding: "5px 10px",
            borderRadius: "5px",
            outline: "none",
            border: "none",
          }}
        />
      </form>
    </div>
  );
}
