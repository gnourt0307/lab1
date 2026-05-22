import { useState } from "react";

export default function LikeButton({ initialLikes = 0 }) {
  const [like, setLike] = useState(initialLikes);

  return (
    <div
      className="like-button"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Feel free to drop a like</h2>
      <button
        style={{ fontSize: "20px" }}
        onClick={() => setLike((prev) => prev + 1)}
      >
        👍:{" " + like}
      </button>
    </div>
  );
}
