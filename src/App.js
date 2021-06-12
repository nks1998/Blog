import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Bollyhood from "./component/Bollyhood";
import Hollyhood from "./component/Hollyhood";
import Food from "./component/Food";
import Technology from "./component/Technology";
import Fitness from "./component/Fitness";
import "./app.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="navbar"/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Bollyhood" component={Bollyhood}></Route>
          <Route exact path="/Hollyhood" component={Hollyhood}></Route>
          <Route exact path="/Food" component={Food}></Route>
          <Route exact path="/Technology" component={Technology}></Route>
          <Route exact path="/Fitness" component={Fitness}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
