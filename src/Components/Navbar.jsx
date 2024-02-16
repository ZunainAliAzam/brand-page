const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="brand logo" />
      </div>

      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/location">Location</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navbar;
