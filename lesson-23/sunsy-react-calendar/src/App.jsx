import React, { Component } from 'react';
import CalendarPicker from './calendar/CalendarPicker';

class App extends Component {
    render() {
        return (
            <CalendarPicker value={'20171120'} />
        )
    }
}

export default App