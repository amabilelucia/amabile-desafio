import { Link } from "react-router-dom";
import "./header.css";

export default () => {
  return (
    <div>
      <header>
        <ul>
          <button>
            <Link to="/" className="text-link">Home</Link>
          </button>
          <button>
            <Link to="/graphic" className="text-link">Gráficos</Link>
          </button>
          <button>
            <Link to="/map" className="text-link">Mapa</Link>
          </button>
        </ul>
      </header>
    </div>
  );
};