import React, { Component } from 'react';
import PropTypes from 'prop-types';

class YearPicker extends Component {
  static propTypes = {
    start: PropTypes.number,
    onSelect: PropTypes.func,
    onReturn: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      above: 0,
      below: 0
    };
  }

  componentDidMount(){
    this.scrollToCenter();
    this.scrollPanel.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    this.scrollPanel.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    // if(this.scrollPanel.scrollTop === 0){
    //   this.setState(
    //     {above: this.state.above + 50},
    //     () => {}
    //   );
    // }
    // if(this.scrollPanel.scrollTop + this.scrollPanel.clientHeight
    //   === this.scrollPanel.scrollHeight
    // ){
    //   this.setState({
    //     below: this.state.below + 50
    //   })
    // }
    if (this.scrollPanel.scrollTop === 0) {
      this.setState({
        above: this.state.above + 50
      }, () => {

        const rect = this.scrollPanel.querySelector('div.year-row').getBoundingClientRect()
        this.scrollPanel.scrollTop = rect.height * 50
      })
    }
    const rect = this.scrollPanel.getBoundingClientRect()

    if (
      this.scrollPanel.scrollTop + rect.height ===
      this.scrollPanel.scrollHeight
    ) {
      this.setState({
        below: this.state.below + 50
      })
    }
  }

  scrollToCenter(){
    // this.scrollPanel.scrollTop = 
    // (this.scrollPanel.scrollHeight - this.scrollPanel.clientHeight) / 2
    const rect = this.scrollPanel.getBoundingClientRect()
    const scrollHeight = this.scrollPanel.scrollHeight
    this.scrollPanel.scrollTop = (scrollHeight - rect.height) / 2
  }

  render() {
    const {start, onReturn, onSelect} = this.props;
    const {above, below} = this.state;
    return (
      <div className="datepicker-months" style={{ display: 'block' }}>
        <table className="table-condensed">
          <thead>
            <tr>
              <th
                className="picker-switch"
                data-action="pickerSwitch"
                title="返回"
              >
                <a href="#" onClick={onReturn}>
                  返回
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div
                  className="year-scroll-panel"
                  ref={el => (this.scrollPanel = el)}
                >
                  {[...Array(above + 100 + below)].map((_, i) => {
                    const year = start - 50 - above + i;
                    return(
                      <div
                        key={year} className="year-row" 
                        onClick={() => onSelect(year)}
                      >
                        {year}
                      </div>
                    )
                  })}
                </div>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
    );
  }
}

export default YearPicker;