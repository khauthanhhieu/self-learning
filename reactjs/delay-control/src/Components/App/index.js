import { useState } from 'react';
import DebounceInput from './DelayControl/DebounceInput';
import './App.css';

function App() {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <DebounceInput defaultValue="" ms={500} onChange={handleChange} />
      <div>
        <span>Value: </span>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default App;
