import { Link } from "react-router-dom";
import "./header.css";
import logo from "../img/logo-inovia.png";
import { toggleDarkMode } from "halfmoon";

export default () => {
  return (
    <div>
      <header>
        <img src={logo} className="logo"></img>
        <section className="button">
          {" "}
          <ul>
            <button className="button">
              <Link to="/" className="text-link">
                Home
              </Link>
            </button>
            <button className="button">
              <Link to="/graphic" className="text-link">
                Gráficos
              </Link>
            </button>
            <button className="button">
              <Link to="/map" className="text-link">
                Mapa
              </Link>
            </button>
            <button className="btn btn-primary" type="button" onClick={toggleDarkMode}>Dark</button>
          </ul>
        </section>
      </header>
    </div>
  );
};
