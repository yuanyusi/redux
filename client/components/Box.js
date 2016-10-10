import React from 'react';

class Box extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const {emp} = this.props;
		var d = emp.createdAt.slice(0, 10).split('-');   
        var formatDate = d[1] +'/'+ d[2] +'/'+ d[0]; // 10/30/2010

		return (
<ul className="goals-list content-grid mdl-grid">

  <li id="1" className="mdl-card mdl-cell mdl-shadow--2dp">

   
    <div className="mdl-card__title mdl-color--light-blue-700 mdl-color-text--white">
      <h2>
        <div className="mdl-card__title-text">{emp.description}</div>
        <div className="mdl-card__subtitle-text"><span className="successes">{emp.successes.length}</span> successes, <span  className="failures">{emp.failures.length}</span> failures</div>
      </h2>
    </div>
    <div className="mdl-layout-spacer"></div>

   
    <div className="mdl-card__supporting-text">
      Since {formatDate}
		 
			
    </div>

   
    <div className="mdl-card__actions mdl-card--border">
      <button className="mdl-button mdl-js-button mdl-button--primary success"><i className="material-icons">trending_up</i></button>
      <button className="mdl-button mdl-js-button mdl-button--primary failure"><i className="material-icons">trending_down</i></button>
      <div className="mdl-layout-spacer"></div>
      <button className="mdl-button mdl-js-button mdl-button--colored delete"><i className="material-icons">delete</i></button>
    </div>

  </li>
 
</ul>
		)
	}
};

export default Box;