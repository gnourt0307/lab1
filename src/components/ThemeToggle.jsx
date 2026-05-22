export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
    >
      {darkMode ? "Light mode" : "Dark mode"}
    </button>
  );
}
