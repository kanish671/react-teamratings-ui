import React, { Component } from 'react';
import TeamSelector from './TeamSelector';
import DateSelector from './DateSelector';

class Filters extends Component {
	render() {
		return (
			<div className = "filters">
				<p>filters</p>
				<TeamSelector></TeamSelector>
				<DateSelector></DateSelector>
			</div>
		);
	}
}

export default Filters;