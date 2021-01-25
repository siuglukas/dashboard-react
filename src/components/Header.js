function Header() {
  return (
    <header className="header">
      <div className="header__heading-wrapper">
        <h1 className="header__heading">Social Media Dashboard</h1>
        <h3 className="header__subheading">Total Followers: 23,004</h3>
      </div>

      <div className="header__toggle-switch-wrapper">
        <div className="header__toggle-switch-label">Dark Mode</div>
        <button className="header__toggle-switch-bg">
          <div className="header__toggle-switch-circle"></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
