import { useState } from "react";

export default function ProfileStatus({ initialStatus = true }) {
  const [status, setStatus] = useState(initialStatus);

  return (
    <p className="profile-status">
      <button
        className="status-button"
        type="button"
        onClick={() => setStatus((prev) => !prev)}
      >
        Set status
      </button>{" "}
      <span>{status ? "Online 🟢" : "Offline 🔴"}</span>
    </p>
  );
}
