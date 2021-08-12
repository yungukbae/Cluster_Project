import Loading_Page from "./component/Loading_Page";
import Login_Form from "./component/auth/Login_Form";
import Register_Form from "./component/auth/Register_Form";
import {BrowserRouter , Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Route path="/signup" component={Register_Form}/>
            <Route path="/signin" component={Login_Form}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
