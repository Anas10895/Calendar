import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import calender from './components/calender'
import Navabr from './components/navbar.component'
import ExercisesList from './components/booking-list.component'
import CreateExercises from './components/create-appointment.component'
import CreateUser from './components/create-user.component'
import EditExercises from './components/edit-booking.component'
export default class App extends Component {
  render() {
    return (
<div>
  <Router>
    <div className="container">
    <Navabr/>
          <br/>
          <Route path="/"  exact component ={ExercisesList} />
          <Route path="/edit/:id" exact component ={EditExercises} />
          <Route path="/create" exact component ={CreateExercises} />
          <Route path="/user" exact component ={CreateUser} />
          <Route path="/calender" exact component ={calender} />

    </div>
    

  </Router>  
</div>
    )
  }
}
