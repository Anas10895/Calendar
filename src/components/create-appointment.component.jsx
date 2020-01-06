import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import axios from 'axios'
import {DropdownButton ,Dropdown  } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css"
export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeoffice = this.onChangeoffice.bind(this);


        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: [],
            office:""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(res =>{
            if(res.data.length > 0){
                this.setState({ 
                    users: res.data.map(user => user.username),
                    username: res.data[0].username
                })
             }
        })        
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
        console.log(this.state.description)

    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }
    onChangeoffice(e){
        this.setState({
            office :e.target.eventKey})
            console.log(this.state.office)
    }

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,



        }
        console.log(exercise)

        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data));
        window.location = '/'

        
    }

    render() {
        return (
            <div>
                <h3>Book an Office</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map((user) => {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>
                                })
                            }

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription} 
                            />
                    </div>
                    <div className="form-group">
                        <label>Office Number  </label>
                        {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
              size="lg"
              title="Office Number "
              key={idx}
              value={this.state.office}
              on={this.onChangeoffice} 
              
            >
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
              <Dropdown.Item eventKey="4">4</Dropdown.Item>
              <Dropdown.Item eventKey="5">5</Dropdown.Item>
              <Dropdown.Item eventKey="6">6</Dropdown.Item>
              <Dropdown.Item eventKey="7">7</Dropdown.Item>
              <Dropdown.Item eventKey="8">8</Dropdown.Item>
              <Dropdown.Item eventKey="9">9</Dropdown.Item>
              <Dropdown.Item eventKey="10">10</Dropdown.Item>
              <Dropdown.Item eventKey="11">11</Dropdown.Item>
              <Dropdown.Item eventKey="12">12</Dropdown.Item>
              <Dropdown.Item eventKey="13">13</Dropdown.Item>

             
            </DropdownType>
          ))}
       
                 
                    </div>
                    <div className="form-group">
                        <label>duration  </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                showTimeSelect

                            />
                        </div>
<br/>
                        <div className="form-group">
                            <input type="submit" value="Book" className="btn btn-primary" />
                        </div>
                        </div>

        </form>
            </div>
            

                )
            }
        }
