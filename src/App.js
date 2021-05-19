import "./App.css";
import SearchPage from "./components/SearchPage";
import { BrowserRouter, Route } from "react-router-dom";
import jobCard from "./components/JobCard";
function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
        <Route exact path="/" component={SearchPage} />
        <Route path="/:singleJobId" component={jobCard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
