import React from 'react';
import { Card, ListGroup } from "react-bootstrap";

class App extends React.Component {

    
    // state = { info: null, selectedRows: [] }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <DeviceDetails />
                <br />
                <SimSettings />
                <br />
                <UserAccount />
            </div>
           
        );
    }
}
const SimSettings = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>SIMs Settings:</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Slot: </ListGroup.Item>
                <ListGroup.Item>In Use: </ListGroup.Item>
                <ListGroup.Item>MSIS:</ListGroup.Item>
                <ListGroup.Item>ICCID:</ListGroup.Item>
                <ListGroup.Item>APN:</ListGroup.Item>
                <ListGroup.Item>Mode:</ListGroup.Item>
            </ListGroup>
        </Card>

    );
}

const DeviceDetails = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>Device Details</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: </ListGroup.Item>
                <ListGroup.Item>Serial Number: </ListGroup.Item>
                <ListGroup.Item>IMEI: </ListGroup.Item>
                <ListGroup.Item>Version: </ListGroup.Item>
                <ListGroup.Item>Sync Date: </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

const UserAccount = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>End User Accounts</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Users: </ListGroup.Item>
                <ListGroup.Item>Notification: </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default App;
