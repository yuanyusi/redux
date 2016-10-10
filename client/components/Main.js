import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import NavLink from './modules/navLink'
//import B from './modules/b';
//import sboxPage from './modules/sboxPage';
//import employeePage from './modules/employeePage';

connect(state => ({example: state.example.data }))

class Main extends React.Component {
	render(){
		return (
			<div>
				<h1> 
					<Link to="/"> Reduxstagram </Link>
				</h1>
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				    	<ul className="nav navbar-nav navbar-right">
				    		<li><NavLink to="/employee">Employees</NavLink></li>
				    		<li><NavLink to="/goals">Goals</NavLink></li>
				    		<li><NavLink to="/photoGrid">PhotoGrid</NavLink></li>
				    	</ul>
				    </div>
				   </div>
				</nav>

				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
};

export default Main;