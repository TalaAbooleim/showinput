// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function MyComponent() {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [showValues, setShowValues] = useState(false);

  const handleButtonClick = () => {
    setShowValues(true);
  };

  return (
    <div className='container'>
    <div className='input' >
      
      <div className="yourinfo">
      <h2>Your information</h2>
<hr></hr>

      <label >Enter first name:</label>
     
      <input
        type="text"
        value={input1Value}
        onChange={(e) => setInput1Value(e.target.value)}
      />
      <br></br><br></br>
      <label>enter last name:</label>
      <input
        type="text"
        value={input2Value}
        onChange={(e) => setInput2Value(e.target.value)}
      />
      <br></br><br></br>
      <label >Enter your age:</label>
      <input
        type="text"
        value={input3Value}
        onChange={(e) => setInput3Value(e.target.value)}
      />
      <br></br>
       <button  className="btn"onClick={handleButtonClick}>Submit</button>

    </div>
    </div>
    {showValues && (
    <div className='output'>
    <p>your first name is :  {input1Value|| <span className="whitespace">&nbsp;</span>} and  last name is   {input2Value || <span className="whitespace">&nbsp;</span>} and your age is :   {input3Value|| <span className="whitespace">&nbsp;</span> }</p>

    </div>
    )}
    
    </div>
    
   
   
  );
 
}
export default MyComponent;