// 2:45:37
import Chat from "./Chat";
import "./App.css";
import Sidebar from "./Sidebar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import { useStateVaule } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateVaule();
  return (
    // BEM naming convention
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
              <Route path="/">{/* <h1>Home screen</h1> */}</Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
