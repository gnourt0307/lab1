export default function ProfileHobbies({ hobbies = [] }) {
  return (
    <div className="profile-hobbies">
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
