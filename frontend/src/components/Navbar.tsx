import Enact from "../Enact";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="/campus">
          <i className="bi-image"></i> Campus Meet
        </a>
        <a className="navbar-brand mx-3" href="#">
          <i className="bi-person-circle"></i>
        </a>
      </div>
    </nav>
  );
}
