import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllBooks from "./components/AllBooks";
import MyFooter from "./components/MyFooter";

//import Alert from "react-bootstrap/Alert";

function App() {
  return (
    <div className="App">
      <MyNav brand="Epibook" />
      <Welcome />
      <AllBooks />
      <MyFooter />
    </div>
  );
}

export default App;
