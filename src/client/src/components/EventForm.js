import React, {Component} from "react";
import axios from 'axios';

export default class EventForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            date: "",
            location: "",
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value,
        });
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newEvent = {
            name: this.state.name,
            date: this.state.date,
            location: this.state.location,
        };
        
        axios.post("http://localhost:5000/events/add", newEvent).then((res) => console.log(res.data));

        this.setState({
            name: "",
            date: "",
            location: "",
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label for="event-name"> Event Name: </label>
                <input onChange={this.onChangeName} id="event-name" type="text" />
                <br />
                <label for="event-date"> Date: </label>
                <input onChange={this.onChangeDate} id="event-date" type="text" />
                <br />
                <label for="event-location"> Location: </label>
                <input onChange={this.onChangeLocation} id="event-location" type="text" />
                <br />
                <input type="submit" value="Add Event" />
            </form>
        )
    }
}