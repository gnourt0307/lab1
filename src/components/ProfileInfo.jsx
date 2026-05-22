export default function ProfileInfo({ fullName, major, id, className }) {
  return (
    <>
      <header>
        <h1>{fullName}</h1>
        <p className="profile-role">{major}</p>
      </header>

      <p className="profile-summary">
        ID: <strong>{id}</strong> Class <strong>{className}</strong>.
      </p>
    </>
  );
}
