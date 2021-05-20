import "./App.css";
import SearchPage from "./components/SearchPage";
import { BrowserRouter, Route } from "react-router-dom";
import jobCard from "./components/JobCard";
import Favourites from "./components/Favourites";
// import myListFavourite from "./components/FavouriteList";
function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
        <Route exact path="/" component={SearchPage} />
        <Route path="/:singleJobId" component={jobCard} />
        <Route path="/favourites" component={Favourites} />
      </BrowserRouter>
    </div>
  );
}

export default App;
