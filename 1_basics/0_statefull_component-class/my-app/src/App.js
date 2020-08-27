import React from 'react';
import './App.css';

/* 

Stateful component - Smart component

- should contain state
- should contain complex UI logic

*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        This is a new App
      </div>
    );
  }
}

export default App;
