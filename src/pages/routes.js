import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './inicio/index';
import Listagem from './listagem/index';
import App from './test';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/lista" exact component={Listagem} />  
                <Route path="/test" exact component={App} />              
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;