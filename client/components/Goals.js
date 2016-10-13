import React from 'react';
import Goal from './Goal';
import Box from './Box';
import { connect } from 'react-redux';
//import { fetchData, insertGoal } from '../actions/actionCreators';
const url = 'http://localhost:8080/api/goals';

//connect(state => ({data: state.example.data}))
class Goals extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.props.fetchData(url);
	}

	handleSubmit(e){
		
		e.preventDefault();
		this.props.insertGoal(url, this.refs.description.value);
		this.props.fetchData(url);
		this.refs.goalForm.reset();
		
	}
	
	
	//componentWillReceiveProps(nextProps) {
		//this.props.dispatch ( fetchData(url) );
          //if (!shallowEqual(nextProps, this.props)) {
           // if (shouldUpdateStateProps) {
           //   this.updateStateProps(nextProps);
           // }

          //  if (shouldUpdateDispatchProps) {
          //    this.updateDispatchProps(nextProps);
          //  }

          //  this.updateState(nextProps);
         // }
       // }
	
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
  
				{this.props.example.map((emp, i) => 
				<Box key={i} i={i} emp={emp} />
				)}
						
				 </div>	
			</div>
		);
	}
};

/*export default connect( (state) => {
	return {
		example: state.example.data
	}
})(Goals);*/

export default Goals;