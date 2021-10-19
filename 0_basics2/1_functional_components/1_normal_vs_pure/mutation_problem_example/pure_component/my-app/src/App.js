import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const SomeRandomText = (props) => {
  return <div>{props.text}</div>;
}

const SomeListOfWords = (props) => {
  return <div>{props.words.join(',')}</div>;
}

const SomeDeepObject = (props) => {
  let someObject = props.someObject;
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
    <div>{props.someObject.name}</div>
    <div>{props.someObject.age}</div>
    <div>{props.someObject.innerObject.name}</div>
    <div>{skills}</div>
  </div>;
}

const App = () => {

  // ------------------------
  // Local State
  // ------------------------
  const [myState, setMyState] = useState({
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
  });

  const handleClick0 = () => {
    console.log('handleClick0');

    // 1) DON'T CHANGE STATE DIRECTLY !! ---------------------
    // myState.randomText = "changed";

    // 2) DON'T MUTATE THE OBJECT INSIDE THE STATE -----------
    // This section is bad style and causes a bug
    let text = myState.randomText;
    text = "changed";
    setMyState({ ...myState, randomText: text });

    // 3) USE THIS
    // setMyState(state => ({
    //   ...myState,
    //   randomText: 'changed',
    // }));
  }

  const handleClick1 = () => {
    console.log('handleClick1');

    // 1) DON'T CHANGE STATE DIRECTLY !! ---------------------
    // myState.words.push('maklar2');

    // 2) DON'T MUTATE THE OBJECT INSIDE THE STATE -----------
    // This section is bad style and causes a bug
    const words = myState.words;
    words.push('marklar2');
    setMyState({ ...myState, words: words });

    // 3) USE THIS
    // setMyState(state => ({
    //   ...myState,
    //   words: [...state.words, 'marklar2'],
    // }));
  }

  const handleClick2 = () => {
    console.log('handleClick2');

    // 1) DON'T CHANGE STATE DIRECTLY !! ---------------------
    // myState.someObject.age += 1;

    // 2) DON'T MUTATE THE OBJECT INSIDE THE STATE -----------
    // This section is bad style and causes a bug
    const obj = myState.someObject;
    obj.age += 1;
    setMyState({ ...myState, someObject: obj });

    // 3) USE THIS
    // setMyState(state => ({
    //   ...myState,
    //   someObject: { ...state.someObject, age: state.someObject.age + 1 },
    // }));
  }


  return (
    <div>
      <button onClick={handleClick0.bind(this)}>Click here</button>
      <SomeRandomText text={myState.randomText} />
      <br />
      <button onClick={handleClick1.bind(this)}>Click here</button>
      <SomeListOfWords words={myState.words} />
      <br />
      <button onClick={handleClick2.bind(this)}>Click here</button>
      <SomeDeepObject someObject={myState.someObject} />
    </div>
  );
}


export default App;
