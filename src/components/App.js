import React from 'react';
import Navbar from './Navbar';
import { Container } from "react-bootstrap";
import Table from './Table';
import userInfo from '../info';



class App extends React.Component {

    
    state = { info: null, selectedRows: [] }

    componentDidMount() {
        this.readInfo();
    }

    readInfo = async() => {
        this.setState({ info: userInfo });
    }

    onRowsSelect = (rows) => {
        console.log('From the table! ', rows);
        this.setState({ selectedRows: rows});
    }


    renderTable() {
        if (!this.state.info) return <div>Loading Table...</div> 

        else {
            return <Table info={this.state.info} onRowsSelect={this.onRowsSelect}/>
        }
    }

 

    render() {

        return (
            <Container className="p-2">
                 <Navbar />
                 <br />
                 {this.renderTable()}
            </Container>
           
        );
    }
}

export default App;
