import React, { Component } from 'react';
import CalendarPicker from './calendar/CalendarPicker';
import PropTypes from 'prop-types';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			date: '20180212'
		}
	}
	handleChange = (date) => {
		this.setState({
			date
		})
	}
	render() {
		return (
			<CalendarPicker value={this.state.date} onChange={this.handleChange}/>
		)
	}
}

export default App