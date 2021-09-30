import MainPage from './component/MainPage';
import Menu from './component/Menu';
import LoginPage from "./component/LoginPage";
import {BrowserRouter , Route} from "react-router-dom";
import {firebase_config} from "./config/Fbconfig";
import {kakao_map_config} from "./config/Kmconfig";
import dotenv from 'dotenv'

function App() {
   dotenv.config()
   firebase_config();
    // console.log(process.env.REACT_APP_KAKAO_JS_API_KEY);

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
