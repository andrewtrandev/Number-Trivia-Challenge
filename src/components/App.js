import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Number from './Number';


// function App() {
//   const[number, setNumber] = useState('')
//   const[option, setOption] = useState('')
  
//   function setNumber() {

//   }

// // first thing is the state, second is the function that allows you to update the state

//     onSearchSubmit = async (numberSel, option) => {
//     const response = await axios.get(
//       `http://numbersapi.com/${numberSel}/${option}`
//     );

//     this.setState({ number: response.data });
//   };

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: '10px' }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <Number number={this.state.number} />
//       </div>
//     );
//   }
// }

// export default App;

///////////////////////////////////////////////////////

class App extends React.Component {
  state = { number: '' };

  onSearchSubmit = async (numberSel, option) => {
    const response = await axios.get(
      `http://numbersapi.com/${numberSel}/${option}`
    );

    this.setState({ number: response.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Number number={this.state.number} />
      </div>
    );
  }
}

export default App;
