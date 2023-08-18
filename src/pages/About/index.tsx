import { useState } from "react";

export default function About() {
  const [who, setWho] = useState("🤣");
  return (
    <>
      this is {who}
      <div>
        <button
          onClick={() => {
            if (who === "🤣") {
              setWho("😊");
            } else {
              setWho("🤣");
            }
          }}
        >
          change
        </button>
      </div>
    </>
  );
}
