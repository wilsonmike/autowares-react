import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function MainNav() {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/#">InkPressions | Auto-Wares</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <Link to="/features" className="nav-link" >Features</Link>
      </li>
      <li className="nav-item">
        <Link to="/pricing" className="nav-link" >Pricing</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/#">Action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<Switch>
  <Route exact path="/features">
    <Features />
  </Route>
  <Route exact path="/pricing">
    <Pricing />
  </Route>
</Switch>
</Router>
  )
}

//features
function Features() {
  return (
    <h1>test</h1>
  )
}

//pricing
function Pricing() {
  return (
    <h1>pricing</h1>
  )
}

// Main app rendering
function App() {
  return (
    <div>
      <MainNav />
    </div>
  );
}

export default App;
