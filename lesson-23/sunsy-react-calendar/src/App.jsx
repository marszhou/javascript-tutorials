import React, { Component } from 'react';
import CalendarPicker from './calendar/CalendarPicker';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			date: 20180108
		}
	}
	handleChange = (date) => {
		this.setState({
			date
		})
	}
	render() {
		return (
			<CalendarPicker value={this.state.date} />
		)
	}
}

export default App