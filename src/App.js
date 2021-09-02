import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Quiz from "./quiz1";
import IsTriangle from "./isTriangle";
import Hypotenuse from "./Hypotenuse";
import AreaOfTriangle from "./AreaOfTriangle";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Quiz} />
        <Route exact path="/istriangle" component={IsTriangle} />
        <Route exact path="/hypotenuse" component={Hypotenuse} />
        <Route exact path="/areoftriangle" component={AreaOfTriangle} />
      </Router>
    </div>
  );
}
