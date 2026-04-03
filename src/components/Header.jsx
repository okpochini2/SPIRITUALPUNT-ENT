import logo from "../assets/photo-4.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="logoBox">
      <img src={logo} alt="logo" />
      <h2>SPE</h2>
      </div>
    </header>
  );
}