import MainPage from './component/MainPage';
import Menu from './component/Menu';
import LoginPage from "./component/LoginPage";
import {BrowserRouter , Route} from "react-router-dom";
import {firebase_config} from "./config/Fbconfig";
import {kakao_map_config} from "./config/Kmconfig";

function App() {

   firebase_config();


  return (
      <div className="App">
      <Menu></Menu>
      <BrowserRouter>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/modal" component={LoginPage}/>
      </BrowserRouter>
      </div>
  );
}

export default App;
