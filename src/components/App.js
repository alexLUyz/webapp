import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './admin/App';


class App extends React.Component {

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Route path="/clientAdmin" exact component={Admin} />
                </BrowserRouter>
            </div>           
        );
    }

    
    // state = { info: null, selectedRows: [] }

    // componentDidMount() {
    //     this.readInfo();
    // }

    // readInfo = async() => {
    //     this.setState({ info: userInfo });
    // }

    // onRowsSelect = (row, select) => {
    
    //     select ? this.setState({ selectedRows: [...this.state.selectedRows, row] }) : this.setState({ selectedRows: this.state.selectedRows.filter(element => element !== row) });
    // }


    // renderTable() {
    //     if (!this.state.info) return <div>Loading Table...</div> 

    //     else {
    //         return <Table info={this.state.info} onRowsSelect={this.onRowsSelect} />
    //     }
    // }

    // render() {

    //     console.log(this.state.selectedRows);

    //     return (
    //         <Container className="p-2">
    //              <Navbar />
    //              <br />
    //              {this.renderTable()}
    //         </Container>
           
    //     );
    // }
}

export default App;
