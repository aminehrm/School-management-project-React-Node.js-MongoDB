import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus,FaRegUser ,FaSignOutAlt  ,FaRegFolder} from 'react-icons/fa';
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Gestion d'ecole</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link"><FaRegUser />&nbsp;Etudiants</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link"><FaUserPlus />&nbsp;Ajouter Etudiant</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link"><FaRegFolder />&nbsp;Ajouter departement</Link>
          </li>
          
        </ul>
        <span className="navbar-text">
        <div style={{color:"black",cursor: "pointer"}}  onClick={this.props.logout} ><FaSignOutAlt />&nbsp;Déconnexion</div>
        </span>
        </div>
      </nav>
    );
  }
}