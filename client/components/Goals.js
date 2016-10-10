import React from 'react';
import Goal from './Goal';
import Box from './Box';
import {connect} from 'react-redux';
import axios from 'axios';


connect(state => ({data: state.example.data}))
class Goals extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(e){
		e.preventDefault();
		
		// Send a POST request
		axios({
		  method: 'post',
		  url: 'http://localhost:8080/goals',
		  data: {
			description: this.refs.description.value
		  }
		});
		
		//this.props.addGoal(goalId, description);
		this.refs.goalForm.reset();
		
	}
	
	render(){
		return (
			<div className='container'>

				<div className="content-grid mdl-grid" >
				  <div className="mdl-cell mdl-cell--12-col">
					<form  ref="goalForm" method="POST" className="submit" onSubmit={this.handleSubmit}>
					  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
						<input className="mdl-textfield__input" type="text" id="add-goal" name="description" ref="description" placeholder="New Goal"/>
					  </div>
					  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Submit</button>
					</form>
				  </div>
  
				{this.props.example.data.map((emp, i) => 
				<Box {... this.props} key={i} i={i} emp={emp} />
				)}
						
				 </div>	
			</div>
		);
	}
};

export default Goals;