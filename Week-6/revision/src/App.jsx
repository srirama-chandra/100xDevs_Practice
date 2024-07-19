import React, { useRef } from 'react';

const App = () => {
  // Create a ref for the input element
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Focus the input element when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

export default App;