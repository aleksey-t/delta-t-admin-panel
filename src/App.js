// import "./App.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="App">
      <h1>Главная страница</h1>
      <Sidebar/>
    </div>
  );
}

export default App;
