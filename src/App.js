import "./App.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>Главная страница</h1>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/login">Логин</Link>
      </Nav>
    </div>
  );
}

export default App;
