import React, {useState} from 'react';
import './App.css';



const App: React.FC = () => {
  const [first, setFirst] = useState<string>('')
  const [last, setLast] = useState<string>('')
  const [nick, setNick] = useState<string>('')

  return (
    <div className="App">
      <input placeholder='First Name' value={first} onChange={(e) => setFirst(e.target.value)} />
      <input placeholder='Last Name' value={last} onChange={(e) => setLast(e.target.value)} />
      <input placeholder='Nickname' value={nick} onChange={e => setNick(e.target.value)} />
    </div>
  )
}

export default App;
