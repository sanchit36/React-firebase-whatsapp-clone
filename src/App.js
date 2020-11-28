// 2:45:37
import Chat from "./Chat";
import "./App.css";
import Sidebar from "./Sidebar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import { useStateVaule } from "./StateProvider";
import Home from "./Home";

function App() {
  const [{ user }, dispatch] = useStateVaule();
  return window.innerWidth <= 800 ? (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Sidebar />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  ) : (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
