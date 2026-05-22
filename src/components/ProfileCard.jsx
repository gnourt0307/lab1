import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import ProfileStatus from "./ProfileStatus";
import ProfileAbout from "./ProfileAbout";
import ProfileHobbies from "./ProfileHobbies";
import LikeButton from "./LikeButton";
import { profileData } from "../data/profileData";

export default function ProfileCard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`profile-page ${darkMode ? "dark" : ""}`}>
      <section className="profile-card">
        <ThemeToggle
          darkMode={darkMode}
          onToggle={() => setDarkMode((prev) => !prev)}
        />

        <ProfileAvatar
          src={profileData.avatar}
          alt={`${profileData.fullName} avatar`}
        />

        <div className="profile-body">
          <ProfileInfo
            fullName={profileData.fullName}
            major={profileData.major}
            id={profileData.id}
            className={profileData.className}
          />

          <ProfileStatus initialStatus={profileData.status} />

          <ProfileAbout />

          <ProfileHobbies hobbies={profileData.hobby} />

          <LikeButton />
        </div>
      </section>
    </main>
  );
}
