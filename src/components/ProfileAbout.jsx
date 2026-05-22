export default function ProfileAbout({ description }) {
  return (
    <div className="profile-about">
      <h2>About</h2>
      <p>
        {description ||
          "I enjoy building software projects, practicing guitar, and spending free time with music and games."}
      </p>
    </div>
  );
}
