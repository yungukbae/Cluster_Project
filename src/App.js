import MainPage from './component/MainPage';
import {BrowserRouter , Route} from "react-router-dom";
import {firebase_config} from "./config/Fbconfig";
import {kakao_map_config} from "./config/Kmconfig";

function App() {

   firebase_config();

  return (
      <BrowserRouter>
        <div className="App">
            <Route exact path="/" component={MainPage}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
