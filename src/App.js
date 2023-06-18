import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [val, setVal] = useState("")
  const [count, setCount] = useState('0')
  const handleChange = (e) =>{
    const data = e.target.value.split(' ')
    setVal(e.target.value)
    setCount(data.length)
  }
  return (
    <div>
      <div>
        <h2>Responsive Paragraph Counter</h2>
        <textarea value={val} rows="4" cols="50" onChange={(e)=>handleChange(e)} />
        <p>Word Count: {count}</p>
      </div>
    </div>
  );
}

export default App;
