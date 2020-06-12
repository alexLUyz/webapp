import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './admin/App';
import Client from './dashboard/App'

class App extends React.Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={Admin} />
                    {/* <Route path="/clientAdmin" exact component={Admin} /> */}
                    <Route path="/client" exact component={Client} />
                </BrowserRouter>
            </div>           
        );
    }
    
}

export default App;
