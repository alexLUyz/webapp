import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './admin/App';
import Client from './dashboard/App'

class App extends React.Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Route path="/clientAdmin" exact component={Admin} />
                    <Route path="/client" component={Client} />
                </BrowserRouter>
            </div>           
        );
    }
    
}

export default App;
