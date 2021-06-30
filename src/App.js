import './App.css';
import Game from './components/pages/Game';
import Home from './components/pages/Home';
import NFTCard from './components/pages/NFTCard';
import RoadMap from './components/pages/RoadMap';
import Token from './components/pages/Token';
import WhiteList from './components/pages/WhiteList';
import WhitePaper from './components/pages/WhitePaper';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/nft-card">
          <NFTCard />
        </Route>
        <Route exact path="/token">
          <Token />
        </Route>
        <Route exact path="/road-map">
          <RoadMap />
        </Route>
        <Route exact path="/white-paper">
          <WhitePaper />
        </Route>
        <Route exact path="/white-list">
          <WhiteList />
        </Route>
        <Route exact path="/play-game">
          <Game />
        </Route>
      </div>
    </Router>
  );
}

export default App;
