import React from 'react';
import './App.css';
import CruiseView from './components/CruiseView';
import {Route} from "react-router-dom";
import Main from "./components/Main";
import Cruises from "./components/Cruises";
import {useAppSelector} from "./store/hooks";
import {selectCruise} from "./store/cruiseReducer";
import Ships from "./components/Ships";
import ShipView from "./components/ShipView";
import Header from "./components/Header/Header";
import {ConfirmationDialog} from "./components/AppDialog";

function App() {
const cruise = useAppSelector(selectCruise);
  return (
      <>
    <div className="App">
            <Header/>
            <Route path="/" exact component={Main}/>
            <Route path="/cruises" exact component={Cruises}/>
            <Route path="/cruises/:id" component={CruiseView}/>
            <Route path="/ships" exact component={Ships}/>
            <Route path="/ships/:id" component={ShipView}/>

    </div>
          <ConfirmationDialog error={cruise.error}/>
      </>
  );
}

export default App;
