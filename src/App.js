import "./App.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Главная страница</h1>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/login">Логин</Link>
        <Link to="/new-product">Добавить продукт</Link>
        <Link to="/products">Продукция</Link>
        <Link to="/products/:productId">Отдельный продукт</Link>
      </Nav>
    </div>
  );
}

export default App;
