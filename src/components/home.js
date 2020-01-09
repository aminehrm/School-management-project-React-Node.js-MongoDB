import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar.component"
import ExercisesList from "./listetudiant";
import EditExercise from "./editetudiant";
import CreateExercise from "./createetudiant";
import CreateUser from "./createdepart";




class Home extends Component {
    state = {  }
    render() {  
        return ( 
    <Router>
      <div className="container">
      <Navbar logout={this.props.logout} />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      
      </div>
    </Router>
         );
    }
}

export default Home;