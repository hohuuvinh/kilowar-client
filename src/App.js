import './App.css';
import Game from './components/pages/Game';
import Home from './components/pages/Home';
import NFTCard from './components/pages/NFTCard';
import RoadMap from './components/pages/RoadMap';
import Token from './components/pages/Token';
import WhiteList from './components/pages/WhiteList';
import WhitePaper from './components/pages/WhitePaper';
import JoinWhiteList from './components/pages/JoinWhiteList';
import { HashRouter as Router, Route,Switch} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react'
function App() {
  const [progress, setProgress] = useState(0)
  const onProgress = () =>{
    setProgress(75)
    setTimeout(() => {
      setProgress(100)
    }, 400);
  }
  return (

    <Router>
     
      <LoadingBar
      height="3px"
          color='#0bb634'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home onProgress={onProgress}/>
        </Route>
        <Route path="/nft-card" >
          <NFTCard  onProgress={onProgress}/>
        </Route>
        <Route path="/token">
          <Token onProgress={onProgress}/>
        </Route>
        <Route path="/road-map">
          <RoadMap onProgress={onProgress}/>
        </Route>
        <Route path="/white-paper">
          <WhitePaper onProgress={onProgress}/>
        </Route>
        <Route path="/white-list">
          <WhiteList onProgress={onProgress}/>
        </Route>
        <Route path="/play-game">
          <Game onProgress={onProgress}/>
        </Route>
        <Route path="/join">
          <JoinWhiteList onProgress={onProgress}/>
        </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
