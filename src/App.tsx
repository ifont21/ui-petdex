import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import PhotoRecognition from "./pages/PhotoRecognition/PhotoRecognition";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BreedList from "./pages/BreedList/BreedList";
import BreedDetails from "./pages/BreedDetails/BreedDetails";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__page">
          <Switch>
            <Route exact path="/">
              <PhotoRecognition />
            </Route>
            <Route exact path="/pets">
              <BreedList />
            </Route>
            <Route path="/pets/:id">
              <BreedDetails />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
