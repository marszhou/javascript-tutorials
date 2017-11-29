import React from 'react';
import Calculator from './Calculator/Calculator';
// const App = () => {
//   return (
//     <div>
//       <Calculator />
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cssLoaded: false
    };
  }

  componentWillMount() {
    const el = document.querySelector('link[rel="stylesheet"]');
    el.addEventListener('load', () =>
      this.setState({
        cssLoaded: true
      })
    );
  }

  render() {
    return <div>{!this.state.cssLoaded ? 'loading...' : <Calculator />}</div>;
  }
}

export default App;
