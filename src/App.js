import Loading_Page from "./component/Loading_Page";
import Login_Form from "./component/auth/Login_Form";
import Register_Form from "./component/auth/Register_Form";
import Main_Page from './component/main/Main_Page';
import Detail_Page from "./component/detail/Detail_Page";
import {BrowserRouter , Route} from "react-router-dom";
import {firebase_confg} from "./config/Fbconfig";
function App() {

   firebase_confg();

  return (
      <BrowserRouter>
        <div className="App">
            <Route exact path="/" component={Main_Page}/>
            <Route path="/signup" component={Register_Form}/>
            <Route path="/signin" component={Login_Form}/>
            <Route path="/item/:id" component={Detail_Page}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
