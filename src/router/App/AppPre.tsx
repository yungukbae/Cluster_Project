
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home'
import Detail from '../Detail'

const AppPre = () => {

    return(
        <>
        <BrowserRouter>
        <Switch>
            <Route exact={true} path={'/'} component={Home}/>
            <Route exact={true} path={'/detail'} component={Detail}/>
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default AppPre