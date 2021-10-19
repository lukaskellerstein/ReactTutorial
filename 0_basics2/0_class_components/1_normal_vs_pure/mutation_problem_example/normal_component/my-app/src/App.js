import React from 'react';
import logo from './logo.svg';
import './App.css';

class SomeRandomText extends React.Component {
  // -----------------
  // LIFECYCLE HOOKS - CREATION
  // -----------------

  // 1.
  constructor(props) {
    super(props);

    console.log('SomeRandomText - Constructor');

    // Local state
    this.state = {};
  }

  // 2.
  static getDerivedStateFromProps(props, state) {
    console.log('SomeRandomText - getDerivedStateFromProps', props, state);
    return state;
  }

  // 3.
  render() {
    console.log('SomeRandomText - render');
    return <div>{this.props.text}</div>;
  }

  // 4.
  componentDidMount() {
    console.log('SomeRandomText - componentDidMount');
  }


  // -----------------
  // LIFECYCLE HOOKS - UPDATING
  //
  // When props or state is changed
  // -----------------

  // 1.
  // static getDerivedStateFromProps(){ }

  // 2.
  shouldComponentUpdate() {
    console.log('SomeRandomText - shouldComponentUpdate');
    // ???
    // How-to implement
    // ???
    return true;
  }

  // 3. 
  // render() ... as a last method in this class

  // 4.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('SomeRandomText - getSnapshotBeforeUpdate', prevProps, prevState);
    return prevState;
  }

  // 5.
  componentDidUpdate() {
    console.log('SomeRandomText - componentDidUpdate');
  }

  // -----------------
  // LIFECYCLE HOOKS - DESTROY
  // -----------------
  componentWillUnmount() {
    console.log('SomeRandomText - componentWillUnmount');
  }
}


class SomeListOfWords extends React.Component {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class SomeDeepObject extends React.Component {
  render() {

    let someObject = this.props.someObject;
    let skills = null;
    if (someObject.skills && someObject.skills.length > 0) {
      skills = (
        <ul>
          {
            someObject.skills.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              );
            })
          }
        </ul>
      );
    }

    return <div>
      <div>{this.props.someObject.name}</div>
      <div>{this.props.someObject.age}</div>
      <div>{this.props.someObject.innerObject.name}</div>
      <div>{skills}</div>
    </div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);


    // ------------------------
    // Local State
    // ------------------------
    this.state = {
      randomText: 'some random text',
      words: ['marklar'],
      someObject: {
        name: "Lukas",
        age: 30,
        innerObject: {
          name: "body",
          description: "human body"
        },
        skills: ['walk', 'run', 'eat', 'think', 'reproduce']
      }
    };
  }

  handleClick0() {
    console.log('handleClick0');

    // 1) DON'T CHANGE STATE DIRECTLY !! ---------------------
    // this.state.randomText = "changed";

    // 2) DON'T MUTATE THE OBJECT INSIDE THE STATE -----------
    // This section is bad style and causes a bug
    let text = this.state.randomText;
    text = "changed";
    this.setState({ randomText: text });

    // 3) USE THIS
    // this.setState(state => ({
    //   randomText: 'changed',
    // }));
  }

  handleClick1() {
    console.log('handleClick1');

    // 1) DON'T CHANGE STATE DIRECTLY !! ---------------------
    // this.state.words.push('maklar2');

    // 2) DON'T MUTATE THE OBJECT INSIDE THE STATE -----------
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar2');
    this.setState({ words: words });

    // 3) USE THIS
    // this.setState(state => ({
    //   words: [...state.words, 'marklar2'],
    // }));
  }

  handleClick2() {
    console.log('handleClick2');

    // 1) DON'T CHANGE STATE DIRECTLY !! ---------------------
    // this.state.someObject.age += 1;

    // 2) DON'T MUTATE THE OBJECT INSIDE THE STATE -----------
    // This section is bad style and causes a bug
    const obj = this.state.someObject;
    obj.age += 1;
    this.setState({ someObject: obj });

    // 3) USE THIS
    // this.setState(state => ({
    //   someObject: { ...state.someObject, age: state.someObject.age + 1 },
    // }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick0.bind(this)}>Click here</button>
        <SomeRandomText text={this.state.randomText} />
        <br />
        <button onClick={this.handleClick1.bind(this)}>Click here</button>
        <SomeListOfWords words={this.state.words} />
        <br />
        <button onClick={this.handleClick2.bind(this)}>Click here</button>
        <SomeDeepObject someObject={this.state.someObject} />
      </div>
    );
  }
}

export default App;
