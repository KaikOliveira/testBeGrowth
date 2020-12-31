import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Listagem from './listagem/index';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                
                <Route path="/" exact component={Listagem} />  
                             
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;