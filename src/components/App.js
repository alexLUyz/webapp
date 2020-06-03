import React from 'react';
import Navbar from './Navbar';
import { Container } from "react-bootstrap";
import Table from './Table'

class App extends React.Component {

    render() {
        return (
            <Container className="p-2">
                 <Navbar />
                 <Table />
            </Container>
           
        );
    }
}

export default App;
