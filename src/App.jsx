import { useState } from "react";
import "./App.css";
import "./DarkMode.css";

const info = {
  avatar: "./avatar.jpg",
  fullName: "Nguyễn Minh Trường",
  id: "HE204046",
  className: "SE2009-NJ",
  major: "Software Engineering",
  hobby: ["Play guitar", "Listen to music", "Play games"],
  status: true,
};

function ProfileCard() {
  const [status, setStatus] = useState(info.status);
  const [darkMode, setDarkMode] = useState(false);
  const [like, setLike] = useState(0);

  return (
    <main className={`profile-page ${darkMode ? "dark" : ""}`}>
      <section className="profile-card">
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "Light mode" : "Dark mode"}
        </button>

        <img
          className="profile-avatar"
          src={info.avatar}
          alt={`${info.fullName} avatar`}
        />

        <div className="profile-body">
          <header>
            <h1>{info.fullName}</h1>
            <p className="profile-role">{info.major}</p>
          </header>

          <p className="profile-summary">
            ID: <strong>{info.id}</strong> Class{" "}
            <strong>{info.className}</strong>.
          </p>
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

          <div className="profile-about">
            <h2>About</h2>
            <p>
              I enjoy building software projects, practicing guitar, and
              spending free time with music and games.
            </p>
          </div>

          <div className="profile-hobbies">
            <h2>Hobbies</h2>
            <ul>
              {info.hobby.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
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
              onClick={() => {
                setLike(like + 1);
              }}
            >
              👍:{" " + like}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return <ProfileCard />;
}

export default App;
