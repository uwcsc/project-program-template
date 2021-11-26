import React, {Component} from "react";
import axios from 'axios';

function Event(props) {
    return (
        <tr>
        <td>{props.event.name}</td>
        <td>{props.event.date}</td>
        <td>{props.event.location}</td>
    </tr>
    );
}

export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {events: []};
    }
    componentDidMount() {
        axios
        .get("http://localhost:5000/events/")
        .then((response) => {
            this.setState({events: response.data});
            console.log('Success');
        })
        .catch(function(error){
            console.log(error);
        });
    }
    eventList() {
        return this.state.events.map((currentEvent) => {
            return (
                <Event
                    event={currentEvent}
                    key={currentEvent._id}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Event List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Time</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.eventList()}
                    </tbody>
                </table>
            </div>
        );
    }
}